import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ContentWrapper from './ContentWrapper';
import RichText from './RichText';

const HeroBannerV2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: THREE.WebGLRenderer;
    let uniforms: any;
    const startTime = Date.now();

    const init = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      const camera = new THREE.Camera();
      camera.position.z = 1;

      const scene = new THREE.Scene();

      const geometry = new THREE.PlaneGeometry(16, 9);

      uniforms = {
        iGlobalTime: { type: 'f', value: 1.0 },
        iResolution: {
          type: 'v2',
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      };

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 4.0);
          }
        `,
        fragmentShader: `
          uniform vec2 iResolution;
          uniform float iGlobalTime;

          vec3 hsv2rgb(vec3 c) {
              vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
              vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
              return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
          }

          vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

          float snoise(vec2 v) {
              const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
              vec2 i = floor(v + dot(v, C.yy));
              vec2 x0 = v - i + dot(i, C.xx);
              vec2 i1 = x0.x > x0.y ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
              vec4 x12 = x0.xyxy + C.xxzz;
              x12.xy -= i1;
              i = mod(i, 289.0);
              vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
              vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
              m = m * m * m * m;
              vec3 x = 2.0 * fract(p * C.www) - 1.0;
              vec3 h = abs(x) - 0.5;
              vec3 ox = floor(x + 0.5);
              vec3 a0 = x - ox;
              m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
              vec3 g;
              g.x = a0.x * x0.x + h.x * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
          }

          void main(void) {
            vec2 uv = gl_FragCoord.xy / iResolution.xy;
            float xnoise = snoise(vec2(uv.x, iGlobalTime / 5.0 + 10000.0));
            float ynoise = snoise(vec2(uv.y, iGlobalTime / 5.0 + 500.0));
            vec2 t = vec2(xnoise, ynoise);
            float s1 = snoise(uv + t / 2.0 + snoise(uv + snoise(uv + t / 3.0) / 5.0));
            float s2 = snoise(uv + snoise(uv + s1) / 7.0);
            vec3 hsv = vec3(0.07 + 0.3 * s1, 0.9, 0.9 - 0.3 * s2);

            vec3 rgb = hsv2rgb(hsv);
            gl_FragColor = vec4(rgb, 1.0);
          }
        `,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        uniforms.iResolution.value.x = window.innerWidth;
        uniforms.iResolution.value.y = window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', onWindowResize, false);
      onWindowResize();

      const animate = () => {
        requestAnimationFrame(animate);
        uniforms.iGlobalTime.value = (Date.now() - startTime) * 0.001;
        renderer.render(scene, camera);
      };

      animate();
    };

    init();

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className={`hero-banner-v2 bg-color-neutral-900`}>
      <ContentWrapper>
        <div className="hero-content">
          <RichText content="<h1>Zabłyśnij</br><span class='online-text'><span class='online'><span></span></span>NLINE</span></br>Razem z nami</h1>" />
          <RichText content="Lorem ipsum"></RichText>
        </div>
        <div ref={containerRef} className="animated-background"/>
      </ContentWrapper>
    </div>
  );
};

export default HeroBannerV2;
