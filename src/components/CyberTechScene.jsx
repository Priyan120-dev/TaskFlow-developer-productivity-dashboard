import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CyberTechScene - Realistic 3D Futuristic Developer Control Center
 * Built with Three.js WebGL rendering matching the reference design:
 * - Concentric metallic floor with rotating geometric tracks
 * - Neon-blue floor rings with emissive glow
 * - 4 Cylindrical metallic pedestals with neon base rings
 * - 3D Holographic "TS" Cube (top-left)
 * - 3D Code </> device slab (bottom-left)
 * - 3D Cloud icon in glass cube (top-right)
 * - 3D Glowing Security Shield with Lightning Bolt (bottom-right)
 * - 3D Team/User icon badge (foreground-right)
 * - Cinematic lighting, reflections, floating dust particles, and mouse parallax
 */
export const CyberTechScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040814); // Deepest dark cyber navy
    scene.fog = new THREE.FogExp2(0x040814, 0.035);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    // Position camera elevated looking down-forward at the central platform
    camera.position.set(0, 4.4, 11.5);
    camera.lookAt(0, 0.2, 0);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    // Ambient dark indigo fill
    const ambientLight = new THREE.AmbientLight(0x0e1b33, 2.0);
    scene.add(ambientLight);

    // Key directional light from above
    const dirLight = new THREE.DirectionalLight(0x4098ff, 1.6);
    dirLight.position.set(0, 12, 6);
    scene.add(dirLight);

    // Central upward glow beneath the login card
    const centerPointLight = new THREE.PointLight(0x00d8ff, 2.2, 14, 1.2);
    centerPointLight.position.set(0, 0.8, 0);
    scene.add(centerPointLight);

    // Pedestal accent lights
    const leftPointLight = new THREE.PointLight(0x0088ff, 2.4, 12, 1.2);
    leftPointLight.position.set(-5.6, 0.5, -1.0);
    scene.add(leftPointLight);

    const rightPointLight = new THREE.PointLight(0x00d2ff, 2.4, 12, 1.2);
    rightPointLight.position.set(5.6, 0.5, -1.0);
    scene.add(rightPointLight);

    // 4. Materials Library
    const darkMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0x090f1d,
      roughness: 0.35,
      metalness: 0.85,
    });

    const floorPanelMaterial = new THREE.MeshStandardMaterial({
      color: 0x060b16,
      roughness: 0.45,
      metalness: 0.75,
    });

    const neonCyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
    });

    const neonBlueMaterial = new THREE.MeshBasicMaterial({
      color: 0x0080ff,
    });

    const glassBlueMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0077ff,
      metalness: 0.1,
      roughness: 0.12,
      transmission: 0.6,
      transparent: true,
      opacity: 0.65,
      ior: 1.45,
    });

    const glassDarkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x041838,
      metalness: 0.2,
      roughness: 0.15,
      transmission: 0.5,
      transparent: true,
      opacity: 0.75,
      ior: 1.5,
    });

    // 5. Metallic Floor & Concentric Platforms
    const floorGroup = new THREE.Group();
    scene.add(floorGroup);

    // Deep base ground disc
    const groundGeo = new THREE.CylinderGeometry(24, 24, 0.4, 64);
    const groundMesh = new THREE.Mesh(groundGeo, floorPanelMaterial);
    groundMesh.position.y = -1.8;
    floorGroup.add(groundMesh);

    // Central circular platform tiered steps
    const centerPlatformGeo = new THREE.CylinderGeometry(4.6, 4.8, 0.3, 64);
    const centerPlatformMesh = new THREE.Mesh(centerPlatformGeo, darkMetalMaterial);
    centerPlatformMesh.position.y = -1.65;
    floorGroup.add(centerPlatformMesh);

    // Glowing neon cyan inner ring
    const innerNeonRingGeo = new THREE.TorusGeometry(4.7, 0.08, 16, 100);
    const innerNeonRing = new THREE.Mesh(innerNeonRingGeo, neonCyanMaterial);
    innerNeonRing.rotation.x = Math.PI / 2;
    innerNeonRing.position.y = -1.5;
    floorGroup.add(innerNeonRing);

    // Mid neon blue ring
    const midNeonRingGeo = new THREE.TorusGeometry(7.2, 0.09, 16, 120);
    const midNeonRing = new THREE.Mesh(midNeonRingGeo, neonBlueMaterial);
    midNeonRing.rotation.x = Math.PI / 2;
    midNeonRing.position.y = -1.68;
    floorGroup.add(midNeonRing);

    // Outer neon cyan track ring
    const outerNeonRingGeo = new THREE.TorusGeometry(10.8, 0.1, 16, 140);
    const outerNeonRing = new THREE.Mesh(outerNeonRingGeo, neonCyanMaterial);
    outerNeonRing.rotation.x = Math.PI / 2;
    outerNeonRing.position.y = -1.72;
    floorGroup.add(outerNeonRing);

    // Rotating geometric floor tracks
    const rotatingTrack1 = new THREE.Group();
    const rotatingTrack2 = new THREE.Group();
    floorGroup.add(rotatingTrack1);
    floorGroup.add(rotatingTrack2);

    // Radial block ticks on inner track (radius ~6.0)
    const tickGeo = new THREE.BoxGeometry(0.12, 0.06, 0.6);
    for (let i = 0; i < 36; i++) {
      const angle = (i / 36) * Math.PI * 2;
      const tick = new THREE.Mesh(tickGeo, darkMetalMaterial);
      tick.position.set(Math.cos(angle) * 5.9, -1.66, Math.sin(angle) * 5.9);
      tick.rotation.y = -angle;
      rotatingTrack1.add(tick);
    }

    // Radial notches on outer track (radius ~9.2)
    const outerTickGeo = new THREE.BoxGeometry(0.18, 0.06, 0.8);
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2;
      const tick = new THREE.Mesh(outerTickGeo, darkMetalMaterial);
      tick.position.set(Math.cos(angle) * 9.0, -1.7, Math.sin(angle) * 9.0);
      tick.rotation.y = -angle;
      rotatingTrack2.add(tick);
    }

    // 6. Cylindrical Pedestals Function
    const createPedestal = (x, z, radius = 1.3, height = 1.2) => {
      const pedGroup = new THREE.Group();
      pedGroup.position.set(x, -1.7 + height / 2, z);

      // Base metallic pillar
      const baseGeo = new THREE.CylinderGeometry(radius * 0.92, radius, height, 36);
      const baseMesh = new THREE.Mesh(baseGeo, darkMetalMaterial);
      pedGroup.add(baseMesh);

      // Glowing blue neon base ring
      const ringGeo = new THREE.TorusGeometry(radius * 0.95, 0.07, 16, 36);
      const ringMesh = new THREE.Mesh(ringGeo, neonCyanMaterial);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = height * 0.25;
      pedGroup.add(ringMesh);

      // Top bevelled metallic cap
      const capGeo = new THREE.CylinderGeometry(radius * 0.88, radius * 0.92, 0.15, 36);
      const capMesh = new THREE.Mesh(capGeo, darkMetalMaterial);
      capMesh.position.y = height / 2 + 0.05;
      pedGroup.add(capMesh);

      // Top subtle cyan accent circle
      const topRingGeo = new THREE.TorusGeometry(radius * 0.82, 0.03, 16, 36);
      const topRing = new THREE.Mesh(topRingGeo, neonBlueMaterial);
      topRing.rotation.x = Math.PI / 2;
      topRing.position.y = height / 2 + 0.12;
      pedGroup.add(topRing);

      scene.add(pedGroup);
      return pedGroup;
    };

    // Instantiate Pedestals matching the reference positions
    const pedTopLeft = createPedestal(-5.6, -3.2, 1.2, 1.4);
    const pedBottomLeft = createPedestal(-6.2, 1.2, 1.2, 1.1);
    const pedTopRight = createPedestal(5.6, -3.2, 1.2, 1.4);
    const pedBottomRight = createPedestal(6.2, 1.2, 1.2, 1.1);
    const pedFrontRight = createPedestal(5.0, 3.2, 0.9, 0.8);

    // 7. 3D Floating Interactive Objects

    // --- Object 1: 3D "TS" Holographic Rounded Cube (Top-Left) ---
    const tsGroup = new THREE.Group();
    tsGroup.position.set(-5.6, 0.4, -3.2);

    // Glass Cube
    const cubeGeo = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const cubeMesh = new THREE.Mesh(cubeGeo, glassBlueMaterial);
    tsGroup.add(cubeMesh);

    // Glowing cyan edges
    const cubeEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(cubeGeo),
      new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2 })
    );
    tsGroup.add(cubeEdges);

    // High-res glowing "TS" canvas texture
    const tsCanvas = document.createElement('canvas');
    tsCanvas.width = 256;
    tsCanvas.height = 256;
    const tsCtx = tsCanvas.getContext('2d');
    tsCtx.fillStyle = 'rgba(0,0,0,0)';
    tsCtx.fillRect(0, 0, 256, 256);
    tsCtx.font = 'bold 128px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    tsCtx.textAlign = 'center';
    tsCtx.textBaseline = 'middle';
    tsCtx.shadowColor = '#00f0ff';
    tsCtx.shadowBlur = 24;
    tsCtx.fillStyle = '#ffffff';
    tsCtx.fillText('TS', 128, 128);

    const tsTex = new THREE.CanvasTexture(tsCanvas);
    const tsPlaneMat = new THREE.MeshBasicMaterial({
      map: tsTex,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
    });
    const tsPlane1 = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), tsPlaneMat);
    tsPlane1.position.z = 0.01;
    tsGroup.add(tsPlane1);

    scene.add(tsGroup);

    // --- Object 2: 3D Code </> Device Slab (Bottom-Left) ---
    const codeGroup = new THREE.Group();
    codeGroup.position.set(-6.2, -0.4, 1.2);
    codeGroup.rotation.y = 0.35;

    // Device Slab Box
    const slabGeo = new THREE.BoxGeometry(1.3, 1.8, 0.22);
    const slabMesh = new THREE.Mesh(slabGeo, glassDarkMaterial);
    codeGroup.add(slabMesh);

    // Glowing cyan outline
    const slabEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(slabGeo),
      new THREE.LineBasicMaterial({ color: 0x00d8ff })
    );
    codeGroup.add(slabEdges);

    // Extruded 3D Code Brackets `< / >`
    const createCodeBrackets = () => {
      const g = new THREE.Group();

      // Left bracket `<`
      const leftS = new THREE.Shape();
      leftS.moveTo(0.08, 0.4);
      leftS.lineTo(-0.25, 0);
      leftS.lineTo(0.08, -0.4);
      leftS.lineTo(0.2, -0.32);
      leftS.lineTo(-0.1, 0);
      leftS.lineTo(0.2, 0.32);
      leftS.closePath();

      const leftGeo = new THREE.ExtrudeGeometry(leftS, { depth: 0.06, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 });
      const leftMesh = new THREE.Mesh(leftGeo, neonCyanMaterial);
      leftMesh.position.set(-0.28, 0.12, 0.12);
      g.add(leftMesh);

      // Slash `/`
      const slashS = new THREE.Shape();
      slashS.moveTo(-0.06, -0.42);
      slashS.lineTo(0.04, 0.42);
      slashS.lineTo(0.12, 0.42);
      slashS.lineTo(0.02, -0.42);
      slashS.closePath();

      const slashGeo = new THREE.ExtrudeGeometry(slashS, { depth: 0.06, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 });
      const slashMesh = new THREE.Mesh(slashGeo, neonCyanMaterial);
      slashMesh.position.set(-0.02, 0.12, 0.12);
      g.add(slashMesh);

      // Right bracket `>`
      const rightS = new THREE.Shape();
      rightS.moveTo(-0.08, 0.4);
      rightS.lineTo(0.25, 0);
      rightS.lineTo(-0.08, -0.4);
      rightS.lineTo(-0.2, -0.32);
      rightS.lineTo(0.1, 0);
      rightS.lineTo(-0.2, 0.32);
      rightS.closePath();

      const rightGeo = new THREE.ExtrudeGeometry(rightS, { depth: 0.06, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 });
      const rightMesh = new THREE.Mesh(rightGeo, neonCyanMaterial);
      rightMesh.position.set(0.28, 0.12, 0.12);
      g.add(rightMesh);

      // Horizontal code highlight bars below brackets
      const bar1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.04, 0.02), neonBlueMaterial);
      bar1.position.set(0, -0.45, 0.13);
      g.add(bar1);

      const bar2 = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.02), neonCyanMaterial);
      bar2.position.set(-0.15, -0.58, 0.13);
      g.add(bar2);

      return g;
    };
    codeGroup.add(createCodeBrackets());
    scene.add(codeGroup);

    // --- Object 3: 3D Cloud Icon in Glass Cube (Top-Right) ---
    const cloudGroup = new THREE.Group();
    cloudGroup.position.set(5.6, 0.4, -3.2);

    const cloudCubeMesh = new THREE.Mesh(cubeGeo, glassBlueMaterial);
    cloudGroup.add(cloudCubeMesh);

    const cloudCubeEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(cubeGeo),
      new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2 })
    );
    cloudGroup.add(cloudCubeEdges);

    // Extruded 3D Cloud shape
    const cloudShape = new THREE.Shape();
    cloudShape.moveTo(-0.55, -0.15);
    cloudShape.quadraticCurveTo(-0.65, 0.08, -0.4, 0.22);
    cloudShape.quadraticCurveTo(-0.25, 0.48, 0.0, 0.4);
    cloudShape.quadraticCurveTo(0.32, 0.48, 0.48, 0.25);
    cloudShape.quadraticCurveTo(0.72, 0.08, 0.55, -0.15);
    cloudShape.quadraticCurveTo(0.32, -0.32, 0.0, -0.24);
    cloudShape.quadraticCurveTo(-0.32, -0.32, -0.55, -0.15);
    cloudShape.closePath();

    const cloudGeo = new THREE.ExtrudeGeometry(cloudShape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, neonCyanMaterial);
    cloudMesh.position.set(0, 0, -0.09);
    cloudGroup.add(cloudMesh);

    scene.add(cloudGroup);

    // --- Object 4: 3D Glowing Security Shield with Lightning (Bottom-Right) ---
    const shieldGroup = new THREE.Group();
    shieldGroup.position.set(6.2, -0.4, 1.2);
    shieldGroup.rotation.y = -0.35;

    // Heraldic Shield shape
    const shieldShape = new THREE.Shape();
    shieldShape.moveTo(0, 1.1);
    shieldShape.lineTo(0.75, 1.1);
    shieldShape.quadraticCurveTo(0.95, 0.5, 0.7, -0.05);
    shieldShape.quadraticCurveTo(0.45, -0.65, 0.0, -1.15);
    shieldShape.quadraticCurveTo(-0.45, -0.65, -0.7, -0.05);
    shieldShape.quadraticCurveTo(-0.95, 0.5, -0.75, 1.1);
    shieldShape.closePath();

    const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, {
      depth: 0.22,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.07,
      bevelThickness: 0.07,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, glassBlueMaterial);
    shieldMesh.position.z = -0.11;
    shieldGroup.add(shieldMesh);

    // Glowing shield outer rim wireframe
    const shieldEdges = new THREE.LineSegments(
      new THREE.EdgesGeometry(shieldGeo),
      new THREE.LineBasicMaterial({ color: 0x00f0ff })
    );
    shieldEdges.position.z = -0.11;
    shieldGroup.add(shieldEdges);

    // 3D Lightning Bolt Shape
    const lightningShape = new THREE.Shape();
    lightningShape.moveTo(0.04, 0.65);
    lightningShape.lineTo(0.32, 0.65);
    lightningShape.lineTo(-0.04, 0.05);
    lightningShape.lineTo(0.24, 0.05);
    lightningShape.lineTo(-0.24, -0.75);
    lightningShape.lineTo(-0.05, -0.12);
    lightningShape.lineTo(-0.28, -0.12);
    lightningShape.closePath();

    const lightningGeo = new THREE.ExtrudeGeometry(lightningShape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.03,
      bevelThickness: 0.03,
    });
    const lightningMesh = new THREE.Mesh(lightningGeo, neonCyanMaterial);
    lightningMesh.position.set(0, 0, 0.14);
    shieldGroup.add(lightningMesh);

    scene.add(shieldGroup);

    // --- Object 5: 3D Team / User Icon Badge (Foreground-Right) ---
    const teamGroup = new THREE.Group();
    teamGroup.position.set(5.0, -1.0, 3.2);
    teamGroup.rotation.y = -0.5;

    // Small circular pedestal disc
    const discGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.12, 32);
    const discMesh = new THREE.Mesh(discGeo, darkMetalMaterial);
    teamGroup.add(discMesh);

    const discRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.66, 0.03, 16, 32),
      neonCyanMaterial
    );
    discRing.rotation.x = Math.PI / 2;
    teamGroup.add(discRing);

    // Center user avatar (Head sphere + Torso)
    const headGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const centerHead = new THREE.Mesh(headGeo, neonCyanMaterial);
    centerHead.position.set(0, 0.45, 0);
    teamGroup.add(centerHead);

    const torsoGeo = new THREE.CylinderGeometry(0.1, 0.3, 0.35, 16);
    const centerTorso = new THREE.Mesh(torsoGeo, neonBlueMaterial);
    centerTorso.position.set(0, 0.2, 0);
    teamGroup.add(centerTorso);

    // Flanking user avatars (left and right)
    const leftHead = new THREE.Mesh(headGeo, neonBlueMaterial);
    leftHead.position.set(-0.28, 0.38, -0.1);
    leftHead.scale.set(0.8, 0.8, 0.8);
    teamGroup.add(leftHead);

    const rightHead = new THREE.Mesh(headGeo, neonBlueMaterial);
    rightHead.position.set(0.28, 0.38, -0.1);
    rightHead.scale.set(0.8, 0.8, 0.8);
    teamGroup.add(rightHead);

    scene.add(teamGroup);

    // 8. Subtle Floating Cyber Dust Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = Math.random() * 8 - 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x00d8ff,
      size: 0.06,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. Mouse Parallax Tracker
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 10. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Subtle platform track rotations in opposing directions
        rotatingTrack1.rotation.y += 0.0012;
        rotatingTrack2.rotation.y -= 0.0008;

        // Independent subtle floating for each 3D object
        tsGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.4) * 0.12;
        tsGroup.rotation.y = Math.sin(elapsedTime * 0.7) * 0.12;

        codeGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.2 + 1.0) * 0.12;
        codeGroup.rotation.y = 0.35 + Math.sin(elapsedTime * 0.8) * 0.08;

        cloudGroup.position.y = 0.4 + Math.sin(elapsedTime * 1.3 + 2.0) * 0.12;
        cloudGroup.rotation.y = Math.sin(elapsedTime * 0.6 + 1.0) * 0.1;

        shieldGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.5 + 3.0) * 0.12;
        shieldGroup.rotation.y = -0.35 + Math.sin(elapsedTime * 0.9 + 2.0) * 0.08;

        teamGroup.position.y = -1.0 + Math.sin(elapsedTime * 1.1 + 4.0) * 0.08;

        // Pulsing lighting
        centerPointLight.intensity = 2.2 + Math.sin(elapsedTime * 2.0) * 0.4;
        leftPointLight.intensity = 2.4 + Math.sin(elapsedTime * 1.7) * 0.3;
        rightPointLight.intensity = 2.4 + Math.cos(elapsedTime * 1.9) * 0.3;

        // Drift dust particles upwards
        const positions = particleGeo.attributes.position.array;
        for (let i = 1; i < particleCount * 3; i += 3) {
          positions[i] += 0.004;
          if (positions[i] > 7.0) {
            positions[i] = -1.5;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      // Smooth Camera Parallax Response (Damped Lerp)
      targetX = mouseX * 0.9;
      targetY = 4.4 - mouseY * 0.5;

      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 11. Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 12. Cleanup & Memory Disposal
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // Cleanly dispose renderer and geometries
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at center, #07132b 0%, #030814 80%, #01040a 100%)',
      }}
      aria-hidden="true"
    />
  );
};

export default CyberTechScene;
