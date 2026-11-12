import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Camera, Box } from 'lucide-react';
import steinsCheersImg from '../../assets/images/bavarian-steins-cheers.webp';

type LightingMood = 'tavern' | 'candlelight' | 'golden';

const MOOD_CONFIG: Record<
  LightingMood,
  {
    label: string;
    dotColor: string;
    beerColor: number;
    beerEmissive: number;
    keyLightColor: number;
    rimLightColor: number;
    internalGlow: number;
  }
> = {
  tavern: {
    label: 'Amber',
    dotColor: '#D98218',
    beerColor: 0xd98218,
    beerEmissive: 0x7a3803,
    keyLightColor: 0xffdfb0,
    rimLightColor: 0xc5a46d,
    internalGlow: 2.8,
  },
  candlelight: {
    label: 'Ember',
    dotColor: '#C85A17',
    beerColor: 0xc86412,
    beerEmissive: 0x6b2404,
    keyLightColor: 0xffb36b,
    rimLightColor: 0x8f392c,
    internalGlow: 3.3,
  },
  golden: {
    label: 'Helles',
    dotColor: '#E8B038',
    beerColor: 0xe8a325,
    beerEmissive: 0x854c06,
    keyLightColor: 0xfff3d6,
    rimLightColor: 0xd4b67c,
    internalGlow: 3.0,
  },
};

export const HeroStein3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [mood, setMood] = useState<LightingMood>('tavern');
  const [showPhotoOverlay, setShowPhotoOverlay] = useState<boolean>(false);
  const [toastActive, setToastActive] = useState<boolean>(false);

  const toastPulseRef = useRef<number>(0);
  const moodRef = useRef<LightingMood>('tavern');

  useEffect(() => {
    moodRef.current = mood;
  }, [mood]);

  const handleRaiseToast = () => {
    toastPulseRef.current = 1.0;
    setToastActive(true);
    window.setTimeout(() => setToastActive(false), 650);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      THREE.ColorManagement.enabled = true;
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    const width = container.clientWidth || 340;
    const height = container.clientHeight || 420;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.25, width < 480 ? 9.1 : 8.1);

    // ==================== LIGHTS ====================
    const ambientLight = new THREE.AmbientLight(0xffe9c8, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffdfb0, 2.9);
    keyLight.position.set(4.5, 6.2, 5.5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const rimLightLeft = new THREE.SpotLight(0xc5a46d, 4.5, 20, Math.PI / 3, 0.5, 1);
    rimLightLeft.position.set(-5.5, 4.2, -3.2);
    scene.add(rimLightLeft);

    const burgundyFillLight = new THREE.PointLight(0x8a3340, 2.4, 12);
    burgundyFillLight.position.set(3.8, -2.5, -2.5);
    scene.add(burgundyFillLight);

    const beerCoreLight = new THREE.PointLight(0xff9d1a, 2.8, 5.5);
    beerCoreLight.position.set(0, 0.1, 0.2);

    // ==================== ROOT COMPOSITE GROUP ====================
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    const steinGroup = new THREE.Group();
    steinGroup.position.set(-0.12, -0.12, 0);
    steinGroup.rotation.z = 0.04;
    steinGroup.add(beerCoreLight);
    rootGroup.add(steinGroup);

    // ==================== 1. GOLDEN AMBER BEER LIQUID ====================
    const beerGeometry = new THREE.CylinderGeometry(1.06, 0.96, 2.52, 48, 1, false);
    const beerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xd98218,
      emissive: 0x7a3803,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.65,
      thickness: 1.8,
      ior: 1.36,
      transparent: true,
      opacity: 0.95,
      clearcoat: 0.85,
    });
    const beerMesh = new THREE.Mesh(beerGeometry, beerMaterial);
    beerMesh.position.y = -0.05;
    steinGroup.add(beerMesh);

    // ==================== 2. RISING CARBONATION BUBBLES ====================
    const bubbleCount = 90;
    const bubbleGeometry = new THREE.SphereGeometry(0.025, 8, 8);
    const bubbleMaterial = new THREE.MeshBasicMaterial({
      color: 0xfff0c2,
      transparent: true,
      opacity: 0.75,
    });
    const bubblesGroup = new THREE.Group();
    const bubbleData: { mesh: THREE.Mesh; speed: number; radius: number; angle: number }[] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const m = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      const r = Math.random() * 0.82;
      const a = Math.random() * Math.PI * 2;
      const y = -1.2 + Math.random() * 2.35;
      const scale = 0.5 + Math.random() * 1.1;
      m.scale.setScalar(scale);
      m.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
      bubblesGroup.add(m);
      bubbleData.push({
        mesh: m,
        speed: 0.008 + Math.random() * 0.016,
        radius: r,
        angle: a,
      });
    }
    steinGroup.add(bubblesGroup);

    // ==================== 3. THICK DIMPLED CRYSTAL GLASS ====================
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.06,
      metalness: 0.02,
      transmission: 0.88,
      thickness: 0.98,
      ior: 1.52,
      reflectivity: 0.96,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.42,
    });

    const outerGlassGeo = new THREE.CylinderGeometry(1.22, 1.11, 2.86, 48, 8, true);
    const outerGlassMesh = new THREE.Mesh(outerGlassGeo, glassMaterial);
    outerGlassMesh.position.y = -0.02;
    steinGroup.add(outerGlassMesh);

    const baseSolidMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5ebd6,
      roughness: 0.14,
      metalness: 0.1,
      transmission: 0.72,
      ior: 1.52,
      clearcoat: 1.0,
      transparent: true,
      opacity: 0.68,
    });
    const baseBottomGeo = new THREE.CylinderGeometry(1.14, 1.2, 0.38, 48);
    const baseBottomMesh = new THREE.Mesh(baseBottomGeo, baseSolidMaterial);
    baseBottomMesh.position.y = -1.52;
    steinGroup.add(baseBottomMesh);

    const goldMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a46d,
      roughness: 0.24,
      metalness: 0.9,
    });

    const bottomGoldBandGeo = new THREE.TorusGeometry(1.16, 0.035, 16, 64);
    const bottomGoldBand = new THREE.Mesh(bottomGoldBandGeo, goldMetalMaterial);
    bottomGoldBand.rotation.x = Math.PI / 2;
    bottomGoldBand.position.y = -1.35;
    steinGroup.add(bottomGoldBand);

    // Dimpled Maßkrug Facets
    const dimpleGeo = new THREE.SphereGeometry(0.28, 18, 18);
    dimpleGeo.scale(1.0, 1.28, 0.32);
    const rows = [-0.82, -0.12, 0.56];
    rows.forEach((rowY, rowIdx) => {
      const count = 10;
      const rowRadius = 1.13 + (rowIdx + 1) * 0.025;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (rowIdx % 2 === 0 ? 0 : Math.PI / count);
        const isHandleZone = Math.cos(angle) > 0.82;
        const isFrontCrestZone = rowIdx === 1 && Math.sin(angle) > 0.82;
        if (isHandleZone || isFrontCrestZone) continue;

        const dimple = new THREE.Mesh(dimpleGeo, glassMaterial);
        dimple.position.set(Math.cos(angle) * rowRadius, rowY, Math.sin(angle) * rowRadius);
        dimple.lookAt(0, rowY, 0);
        steinGroup.add(dimple);
      }
    });

    // ==================== 4. FRONT EMBOSSED CREST MEDALLION ====================
    const crestGroup = new THREE.Group();
    crestGroup.position.set(0, 0.05, 1.19);

    const medallionPlateGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.06, 36);
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x1c1815,
      roughness: 0.28,
      metalness: 0.45,
    });
    const medallionPlate = new THREE.Mesh(medallionPlateGeo, obsidianMaterial);
    medallionPlate.rotation.x = Math.PI / 2;
    crestGroup.add(medallionPlate);

    const medallionRingGeo = new THREE.TorusGeometry(0.44, 0.038, 16, 48);
    const medallionRing = new THREE.Mesh(medallionRingGeo, goldMetalMaterial);
    medallionRing.position.z = 0.02;
    crestGroup.add(medallionRing);

    const bStemGeo = new THREE.BoxGeometry(0.08, 0.42, 0.05);
    const bStem = new THREE.Mesh(bStemGeo, goldMetalMaterial);
    bStem.position.set(-0.1, 0, 0.03);
    crestGroup.add(bStem);

    const bLoopTopGeo = new THREE.TorusGeometry(0.1, 0.032, 12, 24);
    const bLoopTop = new THREE.Mesh(bLoopTopGeo, goldMetalMaterial);
    bLoopTop.position.set(0.02, 0.09, 0.03);
    crestGroup.add(bLoopTop);

    const bLoopBotGeo = new THREE.TorusGeometry(0.12, 0.035, 12, 24);
    const bLoopBot = new THREE.Mesh(bLoopBotGeo, goldMetalMaterial);
    bLoopBot.position.set(0.03, -0.09, 0.03);
    crestGroup.add(bLoopBot);

    steinGroup.add(crestGroup);

    // ==================== 5. SCULPTED GLASS HANDLE ====================
    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.12, 0.82, 0),
      new THREE.Vector3(1.78, 0.78, 0),
      new THREE.Vector3(1.92, 0.0, 0),
      new THREE.Vector3(1.72, -0.78, 0),
      new THREE.Vector3(1.08, -0.84, 0),
    ]);
    const handleGeo = new THREE.TubeGeometry(handleCurve, 36, 0.14, 16, false);
    const handleMesh = new THREE.Mesh(handleGeo, baseSolidMaterial);
    steinGroup.add(handleMesh);

    const thumbRestGeo = new THREE.BoxGeometry(0.32, 0.08, 0.22);
    const thumbRest = new THREE.Mesh(thumbRestGeo, goldMetalMaterial);
    thumbRest.position.set(1.48, 0.98, 0);
    thumbRest.rotation.z = 0.28;
    steinGroup.add(thumbRest);

    // ==================== 6. FROTHY CREAM BEER FOAM HEAD ====================
    const foamGroup = new THREE.Group();
    foamGroup.position.y = 1.32;
    const foamMaterial = new THREE.MeshStandardMaterial({
      color: 0xfaf3e3,
      roughness: 0.7,
      metalness: 0.02,
      emissive: 0x2b2216,
      emissiveIntensity: 0.22,
    });

    const mainFoamCapGeo = new THREE.CylinderGeometry(1.18, 1.15, 0.42, 36);
    const mainFoamCap = new THREE.Mesh(mainFoamCapGeo, foamMaterial);
    foamGroup.add(mainFoamCap);

    const foamPuffConfigs = [
      [0, 0.24, 0, 0.58],
      [0.45, 0.2, 0.35, 0.46],
      [-0.48, 0.22, 0.32, 0.48],
      [0.38, 0.21, -0.45, 0.45],
      [-0.42, 0.19, -0.42, 0.44],
      [0.72, 0.14, 0.0, 0.38],
      [-0.72, 0.15, 0.05, 0.39],
      [0.05, 0.17, 0.72, 0.41],
      [-0.08, 0.16, -0.7, 0.38],
      [0.58, 0.12, 0.55, 0.33],
      [-0.56, 0.14, 0.54, 0.35],
      [0.54, 0.13, -0.56, 0.34],
      [-0.55, 0.13, -0.52, 0.34],
      [-0.86, -0.08, 0.82, 0.22],
      [-0.89, -0.26, 0.85, 0.16],
    ];

    foamPuffConfigs.forEach(([x, y, z, r]) => {
      const puffGeo = new THREE.SphereGeometry(r, 20, 20);
      const puff = new THREE.Mesh(puffGeo, foamMaterial);
      puff.position.set(x, y, z);
      puff.scale.y = 0.82;
      foamGroup.add(puff);
    });

    steinGroup.add(foamGroup);

    // ==================== 7. FLOATING BAVARIAN PRETZEL ====================
    const pretzelGroup = new THREE.Group();
    pretzelGroup.position.set(1.85, -1.12, 1.15);
    pretzelGroup.rotation.set(0.35, -0.45, 0.2);
    pretzelGroup.scale.setScalar(0.68);

    const pretzelPoints: THREE.Vector3[] = [];
    const steps = 90;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      const x = Math.sin(t) * 1.05 + 0.38 * Math.sin(2 * t);
      const y = Math.cos(t) * 0.88 - 0.32 * Math.cos(2 * t);
      const z = 0.16 * Math.sin(3 * t);
      pretzelPoints.push(new THREE.Vector3(x, y, z));
    }
    const pretzelCurve = new THREE.CatmullRomCurve3(pretzelPoints, true);
    const pretzelGeo = new THREE.TubeGeometry(pretzelCurve, 100, 0.21, 18, true);
    const pretzelCrustMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8f4319,
      emissive: 0x260e03,
      emissiveIntensity: 0.25,
      roughness: 0.3,
      metalness: 0.05,
      clearcoat: 0.6,
      clearcoatRoughness: 0.22,
    });
    const pretzelMesh = new THREE.Mesh(pretzelGeo, pretzelCrustMaterial);
    pretzelGroup.add(pretzelMesh);

    const saltGeo = new THREE.OctahedronGeometry(0.036, 0);
    const saltMat = new THREE.MeshStandardMaterial({
      color: 0xfff8eb,
      roughness: 0.2,
      metalness: 0.1,
    });
    for (let i = 0; i < 24; i++) {
      const pt = pretzelCurve.getPointAt((i / 24) % 1);
      const salt = new THREE.Mesh(saltGeo, saltMat);
      salt.position.set(
        pt.x + (Math.random() - 0.5) * 0.12,
        pt.y + (Math.random() - 0.5) * 0.12,
        pt.z + 0.19
      );
      salt.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      pretzelGroup.add(salt);
    }

    rootGroup.add(pretzelGroup);

    // ==================== 8. ATMOSPHERIC GOLDEN PARTICLES ====================
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8.5;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7.0;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 5.0;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4b277,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const ambientParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(ambientParticles);

    // ==================== 9. INTERACTION & SCROLL-LINKED 3D LOOP ====================
    let targetRotX = 0.06;
    let targetRotY = -0.25;
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragOffsetY = 0;
    let dragOffsetX = 0;
    let scrollProgress = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevPointerX;
        const dy = e.clientY - prevPointerY;
        dragOffsetY += dx * 0.011;
        dragOffsetX = Math.max(-0.48, Math.min(0.48, dragOffsetX + dy * 0.007));
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;
      } else {
        targetRotY = nx * 0.45;
        targetRotX = -ny * 0.24;
      }
    };

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevPointerX = e.touches[0].clientX;
        prevPointerY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevPointerX;
      const dy = e.touches[0].clientY - prevPointerY;
      dragOffsetY += dx * 0.013;
      dragOffsetX = Math.max(-0.48, Math.min(0.48, dragOffsetX + dy * 0.008));
      prevPointerX = e.touches[0].clientX;
      prevPointerY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onScroll = () => {
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / 700));
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth entry animation from depth
    rootGroup.scale.setScalar(prefersReducedMotion ? 1 : 0.82);
    rootGroup.position.y = prefersReducedMotion ? 0 : -0.45;

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Entry scale & position lerp
      rootGroup.scale.x = THREE.MathUtils.lerp(rootGroup.scale.x, 1, 0.045);
      rootGroup.scale.y = THREE.MathUtils.lerp(rootGroup.scale.y, 1, 0.045);
      rootGroup.scale.z = THREE.MathUtils.lerp(rootGroup.scale.z, 1, 0.045);
      rootGroup.position.y = THREE.MathUtils.lerp(
        rootGroup.position.y,
        scrollProgress * 0.35,
        0.05
      );

      // Smooth mood lighting transitions
      const currentMood = MOOD_CONFIG[moodRef.current];
      beerMaterial.color.lerp(new THREE.Color(currentMood.beerColor), 0.06);
      beerMaterial.emissive.lerp(new THREE.Color(currentMood.beerEmissive), 0.06);
      keyLight.color.lerp(new THREE.Color(currentMood.keyLightColor), 0.06);
      rimLightLeft.color.lerp(new THREE.Color(currentMood.rimLightColor), 0.06);
      beerCoreLight.intensity = THREE.MathUtils.lerp(
        beerCoreLight.intensity,
        currentMood.internalGlow + toastPulseRef.current * 1.8,
        0.07
      );

      // Toast celebration pulse decay
      if (toastPulseRef.current > 0.001) {
        toastPulseRef.current *= 0.92;
      } else {
        toastPulseRef.current = 0;
      }
      const toastTilt = Math.sin(toastPulseRef.current * Math.PI) * 0.28;
      const toastLift = Math.sin(toastPulseRef.current * Math.PI) * 0.36;

      const idleSpin = prefersReducedMotion ? 0 : Math.sin(elapsed * 0.45) * 0.24;
      const floatY = prefersReducedMotion ? 0 : Math.sin(elapsed * 1.15) * 0.11;

      steinGroup.position.y = -0.12 + floatY + toastLift;
      steinGroup.rotation.y = THREE.MathUtils.lerp(
        steinGroup.rotation.y,
        targetRotY + idleSpin + dragOffsetY + scrollProgress * 0.55,
        0.06
      );
      steinGroup.rotation.x = THREE.MathUtils.lerp(
        steinGroup.rotation.x,
        targetRotX + dragOffsetX - toastTilt * 0.4 + scrollProgress * 0.18,
        0.06
      );
      steinGroup.rotation.z = 0.04 + toastTilt;

      // Foam breathing
      const foamScale = 1 + Math.sin(elapsed * 1.8) * 0.016 + toastPulseRef.current * 0.085;
      foamGroup.scale.set(1, foamScale, 1);

      // Secondary 3D Pretzel orbital counter-motion
      pretzelGroup.position.y =
        -1.12 - floatY * 0.85 + Math.cos(elapsed * 1.3) * 0.09 - toastLift * 0.4;
      pretzelGroup.rotation.y =
        -0.45 + elapsed * (prefersReducedMotion ? 0 : 0.3) + targetRotY * 0.5;
      pretzelGroup.rotation.x = 0.35 + Math.sin(elapsed * 0.9) * 0.14 - targetRotX * 0.4;

      // Rising carbonation bubbles
      const speedBoost = 1 + toastPulseRef.current * 4.0;
      for (let i = 0; i < bubbleData.length; i++) {
        const b = bubbleData[i];
        b.mesh.position.y += b.speed * speedBoost;
        b.mesh.position.x = Math.cos(b.angle + elapsed * 1.4) * b.radius;
        if (b.mesh.position.y > 1.18) {
          b.mesh.position.y = -1.22;
        }
      }

      if (!prefersReducedMotion) {
        ambientParticles.rotation.y = elapsed * 0.045 + toastPulseRef.current * 0.2;
        ambientParticles.position.y = Math.sin(elapsed * 0.5) * 0.12;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 340;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.position.z = w < 480 ? 9.1 : 8.1;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      container.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mouseup', onPointerUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center select-none">
      {/* Ambient radial glow behind the 3D Beer Stein */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
          toastActive ? 'opacity-75 scale-105' : 'opacity-45 scale-100'
        }`}
        style={{
          background:
            mood === 'tavern'
              ? 'radial-gradient(circle at 50% 48%, rgba(217,130,24,0.38), rgba(84,43,50,0.22) 55%, transparent 75%)'
              : mood === 'candlelight'
                ? 'radial-gradient(circle at 50% 48%, rgba(200,100,18,0.42), rgba(84,43,50,0.32) 55%, transparent 75%)'
                : 'radial-gradient(circle at 50% 48%, rgba(232,163,37,0.4), rgba(52,66,55,0.22) 55%, transparent 75%)',
        }}
      />

      {/* Minimalist orbital ring behind the 3D stein */}
      <div className="pointer-events-none absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full border border-[#C5A46D]/15 flex items-center justify-center transition-transform duration-1000">
        <div className="w-[84%] h-[84%] rounded-full border border-dashed border-[#C5A46D]/10" />
      </div>

      {/* Three.js WebGL Stage */}
      {webglSupported && !showPhotoOverlay ? (
        <div
          ref={mountRef}
          onDoubleClick={handleRaiseToast}
          className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
          aria-label="Interactive 3D Bavarian Beer Stein and Pretzel"
        />
      ) : (
        /* Clean Photo Perspective View */
        <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#C5A46D]/30 shadow-[0_30px_80px_rgba(0,0,0,0.85)] group animate-modal-3d">
          <img
            src={steinsCheersImg}
            alt="The Bavarian Dimpled Beer Steins"
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-serif-display text-xl text-[#F2EAE0]">
              Dimpled Maßkrug Steins
            </p>
          </div>
        </div>
      )}

      {/* Ultra-Clean Floating 3D Control Pill at Bottom Center */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full bg-[#141311]/90 backdrop-blur-xl border border-[#C5A46D]/25 shadow-[0_12px_40px_rgba(0,0,0,0.75)] max-w-[calc(100%-1rem)]">
        <button
          type="button"
          onClick={handleRaiseToast}
          className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wide hover:bg-[#F2EAE0] transition-all cursor-pointer active:scale-95 shrink-0"
          title="Raise a celebratory toast"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Prost!</span>
        </button>

        <div className="h-3.5 w-[1px] bg-[#C5A46D]/20 mx-0.5 sm:mx-1 shrink-0" />

        {(['tavern', 'candlelight', 'golden'] as LightingMood[]).map((m) => {
          const active = mood === m && !showPhotoOverlay;
          return (
            <button
              key={m}
              type="button"
              onClick={() => {
                setShowPhotoOverlay(false);
                setMood(m);
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] rounded-full text-xs transition-all cursor-pointer shrink-0 ${
                active
                  ? 'bg-[#2A241E] text-[#F2EAE0] font-medium'
                  : 'text-[#9E9589] hover:text-[#F2EAE0]'
              }`}
              title={`${MOOD_CONFIG[m].label} lighting`}
              aria-label={`${MOOD_CONFIG[m].label} lighting`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: MOOD_CONFIG[m].dotColor }}
              />
              <span className="hidden sm:inline">{MOOD_CONFIG[m].label}</span>
            </button>
          );
        })}

        <div className="h-3.5 w-[1px] bg-[#C5A46D]/20 mx-0.5 sm:mx-1 shrink-0" />

        <button
          type="button"
          onClick={() => setShowPhotoOverlay((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] rounded-full text-xs text-[#9E9589] hover:text-[#F2EAE0] transition-colors cursor-pointer shrink-0"
          title={showPhotoOverlay ? 'Switch to 3D model' : 'View real stein photo'}
        >
          {showPhotoOverlay ? (
            <>
              <Box className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>3D</span>
            </>
          ) : (
            <>
              <Camera className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Photo</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

