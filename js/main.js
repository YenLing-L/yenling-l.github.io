const { createApp } = Vue;

const VISITOR_API_URL = "https://visitor-proxy.elenaaitest.workers.dev";
const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbwyv1h2ieL-niQ3X_te8SHUkRBzTT6d8L8O-q9Fgv-9IwaBoyvAlUnuqeuoq7cM4Gc/exec";
const CACHE_KEY = "portfolio_data_cache";
const CACHE_DURATION = 1000 * 60 * 5; /* 快取資料放5分鐘 */

const app = createApp({
  data() {
    return {
      isDetailOpen: false,
      clickPosition: null,
      selectedProject: null,
      hoverProject: null,
      hoverCardX: 0,
      hoverCardY: 0,
      isMenuActive: false,
      mouseX: -200,
      mouseY: -200,
      siteTitle: "YEN-LING",
      showBackToTop: false,
      scrollProgress: 0,
      showDetailBackToTop: false,
      detailScrollProgress: 0,
      showDetailScrollbar: false,
      isMenuOpen: false,
      navActive: false,
      /* 平面設計相關 */
      isGraphicProject: false,
      showLightbox: false,
      mirror1X: 100,
      mirror1Y: 150,
      mirror2X: 300,
      mirror2Y: 250,
      mirror3X: 500,
      mirror3Y: 350,
      mirrorDragging: null,
      mirrorOffsetX: 0,
      mirrorOffsetY: 0,
      graphicImageRect: null,
      navItems: [
        {
          title: "PROJECTS",
          link: "project.html",
          subItems: [
            { text: "網站　WEBSITE", link: "project.html#WebsiteDesign" },
            { text: "平面　GRAPHIC", link: "project.html#GraphicDesign" },
          ],
        },
        {
          title: "INFO",
          link: "index.html",
          image:
            "https://notion-avatar.app/api/svg/eyJmYWNlIjo4LCJub3NlIjozLCJtb3V0aCI6MTIsImV5ZXMiOjMsImV5ZWJyb3dzIjo3LCJnbGFzc2VzIjowLCJoYWlyIjo1MCwiYWNjZXNzb3JpZXMiOjgsImRldGFpbHMiOjEsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InRyYW5zcGFyZW50Iiwic2hhcGUiOiJjaXJjbGUifQ==",
          subItems: [
            { text: "經歷　EXPERIENCE", link: "index.html#Experience" },
            { text: "專長　EXPERTISE", link: "index.html#Expertise" },
            { text: "證照　CERTIFICATES", link: "index.html#Certificates" },
          ],
        },
        {
          title: "CONTACT",
          link: "contact.html",
          subItems: [
            { text: "Gmail", link: "mailto:yenling061@gmail.com" },
            {
              text: "Github",
              link: "https://github.com/YenLing-L?tab=overview&from",
            },
            { text: "Instagram", link: "#" },
            { text: "Have Fun", link: "contact.html#HaveFun" },
          ],
        },
      ],
      sections: [
        {
          title: "Introduction",
          subtitle: "介紹",
          image: "img/self-pic.jpg",
          header: true,
          content: [
            "專注於將品牌的核心價值與視覺美學完美結合，致力於創造兼具創新性與功能性的數位體驗。我的設計風格以精準、現代化且符合趨勢為特色，並透過數位化的思維，為客戶打造獨一無二的品牌形象。作品不僅是視覺的呈現，更是與用戶互動的橋樑。因此，我從不設限於單一風格或形式，而是根據不同產業、企業及團隊的需求，量身定制專屬的設計方案，讓每個品牌都能展現其獨特的個性與魅力。",
            "I blend brand values with visual aesthetics to create innovative, functional digital experiences. My design is precise, modern, and trend-driven, crafting unique brand identities. I tailor solutions to each industry and team, ensuring every brand shines with its unique personality.",
          ],
        },
        {
          title: "Experience",
          subtitle: "經歷",
          image: "img/flight.jpg",
          content: [
            "朝陽科技大學　行銷與流通管理系　碩士　2023<br>Chaoyang University of Technology, Marketing & Logistics, Master",
            "朝陽科技大學　行銷與流通管理系　學士　2022<br>Chaoyang University of Technology, Marketing & Logistics, Bachelor",
            "德國雷根斯堡大學　交換生　2022<br>University of Regensburg, Exchange Student",
            "創價心工程顧問公司　專案管理師　2023-2024<br>Chuang Jia Xin Engineering Consultants, Project Manager",
            "天鎏科技企業有限公司　網頁前端工程師　2025-至今<br>Tyan Liu Technology Co., Ltd., Frontend Engineer",
          ],
          resumeLink: "https://yen061.notion.site/",
        },
        {
          title: "Expertise",
          subtitle: "專長",
          skills: [
            {
              category: "程式語言",
              items: [
                "HTML",
                "CSS",
                "JavaScript",
                "Vue.js",
                "Three.js",
                "jQuery",
                "Bootstrap",
                "Python",
                "PHP",
                "MySQL",
              ],
            },
            {
              category: "網頁製作",
              items: [
                "Vscode",
                "Webstorm",
                "Wordpress",
                "Figma",
                "Framer",
                "Wix",
              ],
            },
            {
              category: "影像處理",
              items: ["Premiere", "illustrator", "Photoshop"],
            },
            {
              category: "文書軟體",
              items: ["Word", "PowerPoint", "Excel", "Canva"],
            },
            { category: "3D建模", items: ["AutoCAD", "Spline"] },
            {
              category: "數據分析",
              items: [
                "SmartPLS",
                "Google Analytics",
                "Google Ads",
                "Poly Analyst",
              ],
            },
          ],
        },
      ],
      portfolioSections: [
        {
          title: {
            part1: "Website  Design",
            part2: "| 網站設計",
          },
          projects: [],
        },
        {
          title: {
            part1: "Graphic Design",
            part2: "| 平面設計",
          },
          projects: [],
        },
      ],
      footerInfo: [
        {
          title: "Info",
          items: [
            "YEN-LING",
            "Web Designer",
            "UI/UX Designer",
            "Graphic Designer",
          ],
        },
        { title: "Follow", items: ["Github", "Instagram", "Facebook"] },
        {
          title: "Contact",
          items: [
            '<a href="mailto:yenling061@gmail.com">yenling061@gmail.com</a>',
          ],
        },
      ],
      copyright: "copyright © 2025 YEN-LING　All Rights Reserved.",
      certificates: [],
      certificateSortKey: "id",
      certificateSortOrder: "asc",
      isFilterMenuOpen: false,
      totalVisitors: 0,
      onlineVisitors: 0,
      sessionId: null,
    };
  },
  computed: {
    spotlightStyle() {
      return {
        clipPath: `circle(80px at ${this.mouseX}px ${this.mouseY}px)`,
        backgroundColor: "#fff",
      };
    },
    cursorStyle() {
      return {
        transform: `translate(${this.mouseX}px, ${this.mouseY}px)`,
      };
    },
    sortedCertificates() {
      const sorted = [...this.certificates];
      const key = this.certificateSortKey;
      const order = this.certificateSortOrder;
      sorted.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];
        if (key === "date") {
          valA = new Date(valA);
          valB = new Date(valB);
        } else if (typeof valA === "string") {
          valA = valA.toLowerCase();
          valB = valB.toLowerCase();
        }
        if (valA < valB) return order === "asc" ? -1 : 1;
        if (valA > valB) return order === "asc" ? 1 : -1;
        return 0;
      });
      return sorted;
    },
  },
  methods: {
    sortCertificates(key, order) {
      this.certificateSortKey = key;
      this.certificateSortOrder = order;
      this.isFilterMenuOpen = false;
    },
    toggleFilterMenu() {
      this.isFilterMenuOpen = !this.isFilterMenuOpen;
    },
    openProjectDetails(project, event) {
      if (event) {
        event.preventDefault();

        // 隱藏 hover 卡片
        this.hoverProject = null;

        // 判斷是否為平面設計項目
        const isGraphic = project.items[1]?.dataText === "平面設計";
        this.isGraphicProject = isGraphic;

        if (isGraphic) {
          this.selectedProject = project;
          this.isDetailOpen = true;
          /* 2 個鏡子在圖片左側，1 個在右側 */
          this.mirror1X = window.innerWidth * 0.42;
          this.mirror1Y = window.innerHeight * 0.15;
          this.mirror2X = window.innerWidth * 0.35;
          this.mirror2Y = window.innerHeight * 0.4;
          this.mirror3X = window.innerWidth * 0.75;
          this.mirror3Y = window.innerHeight * 0.3;
          document.body.style.overflow = "hidden";
          document.body.classList.add("overlay-open");

          this.$nextTick(() => {
            let imgContainer = this.$refs.graphicImageContainer;
            if (Array.isArray(imgContainer)) {
              imgContainer = imgContainer[0];
            }
            if (imgContainer && imgContainer.getBoundingClientRect) {
              this.graphicImageRect = imgContainer.getBoundingClientRect();
            }
          });
          return;
        }

        const clickedRow = event.currentTarget;
        const rect = clickedRow.getBoundingClientRect();

        const nameEl = clickedRow.querySelector(".project-name");
        const previewEl = clickedRow.querySelector(".hover-preview img");

        const nameRect = nameEl ? nameEl.getBoundingClientRect() : null;
        const previewRect = previewEl
          ? previewEl.getBoundingClientRect()
          : null;

        clickedRow.classList.add("expanding");

        this.clickPosition = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
        };
        this.selectedProject = project;

        document.body.style.overflow = "hidden";
        document.body.classList.add("overlay-open");

        const projectTitle = project.items[0].dataText;
        const projectImg = project.items[0].imgSrc;

        const expandOverlay = document.createElement("div");
        expandOverlay.className = "expand-overlay";
        expandOverlay.style.top = rect.top + "px";
        expandOverlay.style.left = rect.left + "px";
        expandOverlay.style.width = rect.width + "px";
        expandOverlay.style.height = rect.height + "px";

        expandOverlay.innerHTML = `
          <div class="expand-overlay-content">
            <span class="expand-overlay-title">${projectTitle}</span>
            <div class="expand-overlay-image">
              <img src="${projectImg}" alt="${projectTitle}" />
            </div>
          </div>
        `;

        document.body.appendChild(expandOverlay);

        const overlayTitle = expandOverlay.querySelector(
          ".expand-overlay-title"
        );
        const overlayImage = expandOverlay.querySelector(
          ".expand-overlay-image"
        );

        if (nameRect && overlayTitle) {
          gsap.set(overlayTitle, {
            position: "absolute",
            left: nameRect.left - rect.left,
            top: nameRect.top - rect.top,
            fontSize: window.getComputedStyle(nameEl).fontSize,
            fontWeight: window.getComputedStyle(nameEl).fontWeight,
          });
        }

        if (previewRect && overlayImage) {
          gsap.set(overlayImage, {
            position: "absolute",
            left: previewRect.left - rect.left,
            top: previewRect.top - rect.top,
            width: previewRect.width,
            height: previewRect.height,
          });
        }

        const tl = gsap.timeline();

        tl.to(expandOverlay, {
          y: -15,
          scale: 1.02,
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(expandOverlay, {
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          y: 0,
          scale: 1,
          borderRadius: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });

        tl.to(
          overlayTitle,
          {
            left: 25,
            top: 15,
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.5"
        );

        const targetWidth = Math.min(window.innerWidth * 0.9, 1100);
        const targetHeight = targetWidth * 0.5;

        tl.to(
          overlayImage,
          {
            left: "50%",
            top: 100,
            xPercent: -50,
            width: targetWidth,
            height: targetHeight,
            borderRadius: 16,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "-=0.5"
        );

        tl.add(() => {
          this.isDetailOpen = true;

          this.$nextTick(() => {
            const detailOverlay = document.querySelector(
              ".project-detail-overlay"
            );
            if (detailOverlay) {
              detailOverlay.classList.add("active");
            }

            gsap.set(".detail-header", {
              opacity: 1,
            });

            gsap.set(".description-text", {
              opacity: 1,
              clearProps: "transform",
            });

            const videoWrapper = document.querySelector(".video-wrapper");
            if (videoWrapper) {
              videoWrapper.style.transition = "none";
              videoWrapper.style.opacity = "1";
              videoWrapper.style.transform = "translateY(0)";
            }

            setTimeout(() => {
              if (expandOverlay && expandOverlay.parentNode) {
                expandOverlay.remove();
              }

              const infoItems = document.querySelectorAll(
                ".project-info-grid .info-item"
              );
              infoItems.forEach((item, index) => {
                gsap.fromTo(
                  item,
                  {
                    x: -50,
                    y: 50,
                    opacity: 0,
                  },
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "power2.out",
                  }
                );
              });

              const galleryItems = document.querySelectorAll(
                ".project-gallery .gallery-item"
              );
              galleryItems.forEach((item, index) => {
                gsap.fromTo(
                  item,
                  {
                    x: -30,
                    y: 30,
                    opacity: 0,
                  },
                  {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.3 + index * 0.08,
                    ease: "power2.out",
                  }
                );
              });
            }, 100);
          });
        });

        this.detailTimeline = tl;
      }
    },

    handleProjectHover(project, event) {
      this.hoverProject = project;
      this.updateHoverPosition(event);
    },

    updateHoverPosition(event) {
      // 將卡片放在滑鼠右上方
      const offsetX = 20;
      const offsetY = -20;
      const cardWidth = 320;
      const cardHeight = 300;

      let x = event.clientX + offsetX;
      let y = event.clientY + offsetY - cardHeight;

      // 確保卡片不超出視窗右邊
      if (x + cardWidth > window.innerWidth) {
        x = event.clientX - cardWidth - offsetX;
      }

      // 確保卡片不超出視窗頂部
      if (y < 10) {
        y = event.clientY + offsetX;
      }

      this.hoverCardX = x;
      this.hoverCardY = y;
    },

    handleProjectLeave() {
      this.hoverProject = null;
    },

    closeProjectDetails() {
      if (this.isGraphicProject) {
        this.isDetailOpen = false;
        this.selectedProject = null;
        this.isGraphicProject = false;
        document.body.style.overflow = "auto";
        document.body.classList.remove("overlay-open");
        return;
      }

      const overlay = document.querySelector(".project-detail-overlay.active");
      const clickPosition = this.clickPosition;

      if (overlay && clickPosition) {
        const projectTitle =
          this.selectedProject?.items?.[0]?.dataText || "Project";
        const projectSubtitle =
          this.selectedProject?.items?.[1]?.dataText || "";
        const projectImg = this.selectedProject?.items?.[0]?.imgSrc || "";

        const expandingRow = document.querySelector(".project-row.expanding");
        let originalNameRect = null;
        let originalLangRect = null;
        let originalPreviewRect = null;

        if (expandingRow) {
          const nameEl = expandingRow.querySelector(".project-name");
          const langEl = expandingRow.querySelector(".project-lang");
          const previewEl = expandingRow.querySelector(".hover-preview img");

          originalNameRect = nameEl ? nameEl.getBoundingClientRect() : null;
          originalLangRect = langEl ? langEl.getBoundingClientRect() : null;
          originalPreviewRect = previewEl
            ? previewEl.getBoundingClientRect()
            : null;
        }

        document.querySelectorAll(".project-detail-overlay").forEach((el) => {
          el.style.display = "none";
          el.style.opacity = "0";
          el.style.visibility = "hidden";
          el.classList.remove("active");
        });

        const shrinkOverlay = document.createElement("div");
        shrinkOverlay.className = "expand-overlay";
        shrinkOverlay.style.top = "0";
        shrinkOverlay.style.left = "0";
        shrinkOverlay.style.width = "100vw";
        shrinkOverlay.style.height = "100vh";
        shrinkOverlay.style.borderRadius = "0";
        shrinkOverlay.style.zIndex = "10001";

        shrinkOverlay.innerHTML = `
          <div class="expand-overlay-content">
            <span class="expand-overlay-title">${projectTitle}</span>
            <span class="expand-overlay-lang">${projectSubtitle}</span>
            <div class="expand-overlay-image">
              <img src="${projectImg}" alt="${projectTitle}" />
            </div>
          </div>
        `;

        document.body.appendChild(shrinkOverlay);

        const overlayTitle = shrinkOverlay.querySelector(
          ".expand-overlay-title"
        );
        const overlayLang = shrinkOverlay.querySelector(".expand-overlay-lang");
        const overlayImage = shrinkOverlay.querySelector(
          ".expand-overlay-image"
        );

        gsap.set(overlayTitle, {
          position: "absolute",
          left: "50%",
          top: "40%",
          xPercent: -50,
          fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
          fontWeight: 600,
        });

        gsap.set(overlayLang, {
          position: "absolute",
          left: "50%",
          top: "calc(40% + 40px)",
          xPercent: -50,
          fontSize: "1rem",
        });

        gsap.set(overlayImage, {
          position: "absolute",
          left: "50%",
          top: "calc(40% + 80px)",
          xPercent: -50,
          width: 200,
          height: 130,
          borderRadius: 8,
        });

        shrinkOverlay.offsetHeight;

        gsap.set(
          [
            ".video-wrapper",
            ".description-text",
            ".project-info-grid .info-item",
            ".project-gallery .gallery-item",
            ".detail-header",
          ],
          { clearProps: "all" }
        );

        const tl = gsap.timeline({
          onComplete: () => {
            shrinkOverlay.remove();
            document
              .querySelectorAll(".project-row.expanding")
              .forEach((el) => {
                el.classList.remove("expanding");
              });
            document
              .querySelectorAll(".project-detail-overlay")
              .forEach((el) => {
                el.style.display = "";
                el.style.visibility = "";
                el.style.opacity = "";
              });
            this.selectedProject = null;
            this.isDetailOpen = false;
            this.showDetailBackToTop = false;
            this.detailScrollProgress = 0;
            this.showDetailScrollbar = false;
            document.body.style.overflow = "auto";
            document.body.classList.remove("overlay-open");
          },
        });

        tl.to(shrinkOverlay, {
          top: clickPosition.top,
          left: clickPosition.left,
          width: clickPosition.width,
          height: clickPosition.height,
          borderRadius: 16,
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.25)",
          duration: 0.5,
          ease: "power3.inOut",
        });

        if (originalNameRect) {
          tl.to(
            overlayTitle,
            {
              left: originalNameRect.left - clickPosition.left,
              top: originalNameRect.top - clickPosition.top,
              xPercent: 0,
              duration: 0.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
        }

        if (originalLangRect) {
          tl.to(
            overlayLang,
            {
              left: originalLangRect.left - clickPosition.left,
              top: originalLangRect.top - clickPosition.top,
              xPercent: 0,
              duration: 0.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
        }

        if (originalPreviewRect) {
          tl.to(
            overlayImage,
            {
              left: originalPreviewRect.left - clickPosition.left,
              top: originalPreviewRect.top - clickPosition.top,
              xPercent: 0,
              width: originalPreviewRect.width,
              height: originalPreviewRect.height,
              borderRadius: 4,
              duration: 0.5,
              ease: "power3.inOut",
            },
            "-=0.5"
          );
        }

        tl.to(shrinkOverlay, {
          y: 0,
          scale: 1,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        document.querySelectorAll(".project-row.expanding").forEach((el) => {
          el.classList.remove("expanding");
        });
        if (overlay) {
          overlay.classList.remove("active");
          overlay.style.opacity = "";
          overlay.style.visibility = "";
        }
        this.selectedProject = null;
        this.isDetailOpen = false;
        this.showDetailBackToTop = false;
        this.detailScrollProgress = 0;
        this.showDetailScrollbar = false;
        document.body.style.overflow = "auto";
        document.body.classList.remove("overlay-open");
      }
    },

    openMenu() {
      this.isMenuActive = true;
    },
    closeMenu() {
      this.isMenuActive = false;
      this.isMenuOpen = false;
    },
    handleMenuLink(link, event) {
      const url = new URL(link, window.location.href);
      const currentPath = window.location.pathname;
      const targetPath = url.pathname;
      const hash = url.hash;

      const currentFile = currentPath.split("/").pop() || "index.html";
      const targetFile = targetPath.split("/").pop() || "index.html";

      const isSamePage =
        currentFile === targetFile ||
        (currentFile === "" && targetFile === "index.html") ||
        (currentFile === "index.html" && targetFile === "");

      if (isSamePage && hash) {
        event.preventDefault();
        this.closeMenu();

        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            history.pushState(null, null, hash);
          }
        }, 300);
      } else {
        this.closeMenu();
      }
    },
    updateSpotlight(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    resetSpotlight() {
      this.mouseX = -200;
      this.mouseY = -200;
    },
    toggleMenu() {
      this.navActive = !this.navActive;
      this.isMenuOpen = !this.isMenuOpen;
      this.isMenuActive = !this.isMenuActive;
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;

      this.scrollProgress =
        docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;

      this.showBackToTop = scrollTop > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollDetailToTop() {
      const overlays = this.$refs.detailOverlay;
      if (Array.isArray(overlays)) {
        overlays.forEach((el) => {
          if (el) {
            el.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        });
      } else if (overlays) {
        overlays.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    handleDetailScroll(event) {
      const overlay = event.target;
      const scrollTop = overlay.scrollTop;
      const scrollHeight = overlay.scrollHeight - overlay.clientHeight;

      this.detailScrollProgress =
        scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;

      this.showDetailBackToTop = scrollTop > 200;

      if (scrollTop > 0 && !this.showDetailScrollbar) {
        this.showDetailScrollbar = true;
      }
    },

    startMirrorDrag(event, mirrorId) {
      event.preventDefault();
      this.mirrorDragging = mirrorId;

      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;

      let mirrorX, mirrorY;
      if (mirrorId === 1) {
        mirrorX = this.mirror1X;
        mirrorY = this.mirror1Y;
      } else if (mirrorId === 2) {
        mirrorX = this.mirror2X;
        mirrorY = this.mirror2Y;
      } else {
        mirrorX = this.mirror3X;
        mirrorY = this.mirror3Y;
      }

      this.mirrorOffsetX = clientX - mirrorX;
      this.mirrorOffsetY = clientY - mirrorY;
    },

    onGraphicMouseMove(event) {
      if (this.mirrorDragging) {
        const clientX = event.touches
          ? event.touches[0].clientX
          : event.clientX;
        const clientY = event.touches
          ? event.touches[0].clientY
          : event.clientY;

        const newX = clientX - this.mirrorOffsetX;
        const newY = clientY - this.mirrorOffsetY;

        if (this.mirrorDragging === 1) {
          this.mirror1X = newX;
          this.mirror1Y = newY;
        } else if (this.mirrorDragging === 2) {
          this.mirror2X = newX;
          this.mirror2Y = newY;
        } else {
          this.mirror3X = newX;
          this.mirror3Y = newY;
        }
      }
    },

    onGraphicTouchMove(event) {
      /* 只在拖曳鏡子時阻止滾動 */
      if (this.mirrorDragging) {
        event.preventDefault();
        this.onGraphicMouseMove(event);
      }
    },

    stopMirrorDrag() {
      this.mirrorDragging = null;
    },

    openLightbox() {
      this.showLightbox = true;
    },

    closeLightbox() {
      this.showLightbox = false;
    },

    getMirrorImageStyle(mirrorId) {
      const mirrorX = mirrorId === 1 ? this.mirror1X : this.mirror2X;
      const mirrorY = mirrorId === 1 ? this.mirror1Y : this.mirror2Y;
      const imgRect = this.graphicImageRect;

      if (!imgRect) {
        return {
          position: "absolute",
          left: "0px",
          top: "0px",
          width: "100%",
          height: "auto",
        };
      }

      /* 鏡子尺寸 */
      const mirrorWidth = 280;
      const mirrorHeight = 100;

      const offsetX = -(mirrorX - imgRect.left);
      const offsetY = -(mirrorY - imgRect.top);

      return {
        position: "absolute",
        left: offsetX + "px",
        top: offsetY + "px",
        width: imgRect.width + "px",
        height: imgRect.height + "px",
      };
    },

    generateSessionId() {
      return (
        "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
      );
    },
    initVisitorTracking() {
      this.setupVisitorTracking();
    },
    async setupVisitorTracking() {
      /* 生成或獲取 session ID */
      this.sessionId = sessionStorage.getItem("visitorSessionId");
      const isNewSession = !this.sessionId;
      if (isNewSession) {
        this.sessionId = this.generateSessionId();
        sessionStorage.setItem("visitorSessionId", this.sessionId);
      }

      /* 如果是新 session，增加總瀏覽人數 */
      if (isNewSession) {
        try {
          await fetch(`${VISITOR_API_URL}/api/visitor/increment-total`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Error incrementing total visitors:", error);
        }
      }

      /* 取得並更新總瀏覽人數 */
      this.fetchTotalVisitors();

      /* 發送初始心跳 */
      this.sendHeartbeat();

      /* 取得線上人數 */
      this.fetchOnlineVisitors();

      /* 定期更新 */
      this.visitorInterval = setInterval(() => {
        this.sendHeartbeat();
        this.fetchOnlineVisitors();
        this.fetchTotalVisitors();
      }, 30000);

      /* 頁面關閉時通知離線 */
      window.addEventListener("beforeunload", () => {
        this.sendOffline();
      });

      /* 使用 visibilitychange 處理頁面切換 */
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          this.sendHeartbeat();
        }
      });
    },
    async fetchTotalVisitors() {
      try {
        const response = await fetch(`${VISITOR_API_URL}/api/visitor/total`);
        const data = await response.json();
        this.totalVisitors = data.total || 0;
      } catch (error) {
        console.error("Error fetching total visitors:", error);
      }
    },
    async fetchOnlineVisitors() {
      try {
        const response = await fetch(`${VISITOR_API_URL}/api/visitor/online`);
        const data = await response.json();
        /* 顯示線上人數（不包含自己，所以減 1） */
        this.onlineVisitors = Math.max(0, (data.online || 1) - 1);
      } catch (error) {
        console.error("Error fetching online visitors:", error);
      }
    },
    async sendHeartbeat() {
      try {
        await fetch(`${VISITOR_API_URL}/api/visitor/heartbeat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: this.sessionId }),
        });
      } catch (error) {
        console.error("Error sending heartbeat:", error);
      }
    },
    sendOffline() {
      const data = JSON.stringify({ sessionId: this.sessionId });
      navigator.sendBeacon(`${VISITOR_API_URL}/api/visitor/offline`, data);
    },

    /* Google Sheets 資料載入 */
    async loadPortfolioData() {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {

            this.applySheetData(data);
            return;
          }
        }

        const [certificates, websiteProjects, graphicProjects] = await Promise.all([
          this.fetchSheetData("certificates"),
          this.fetchSheetData("websiteProjects"),
          this.fetchSheetData("graphicProjects"),
        ]);

        const data = { certificates, websiteProjects, graphicProjects };

        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data,
          timestamp: Date.now(),
        }));

        this.applySheetData(data);
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
      }
    },

    async fetchSheetData(sheetName) {
      const response = await fetch(`${SHEETS_API_URL}?sheet=${sheetName}`);
      if (!response.ok) throw new Error(`Failed to fetch ${sheetName}`);
      return response.json();
    },

    applySheetData(data) {

      if (data.certificates && data.certificates.length > 0) {
        this.certificates = data.certificates.map(cert => ({
          ...cert,
          date: this.formatDate(cert.date)
        }));

      }

      if (data.websiteProjects && data.websiteProjects.length > 0) {
        const webProjects = this.transformWebProjects(data.websiteProjects);

        this.portfolioSections = [
          {
            title: this.portfolioSections[0].title,
            projects: webProjects
          },
          this.portfolioSections[1]
        ];
      }

      if (data.graphicProjects && data.graphicProjects.length > 0) {
        const graphicProjects = this.transformGraphicProjects(data.graphicProjects);

        this.portfolioSections = [
          this.portfolioSections[0],
          {
            title: this.portfolioSections[1].title,
            projects: graphicProjects
          }
        ];
      }
      
      this.$nextTick(() => {
        this.observeNewProjectRows();
      });
    },
    
    observeNewProjectRows() {
      const elements = document.querySelectorAll('.project-row:not(.fade-in-up)');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-up");
            }
          });
        },
        { threshold: 0.1 }
      );
      
      elements.forEach((el) => observer.observe(el));
    },

    transformWebProjects(rows) {
      return rows.map((row) => ({
        link: row.link || "#",
        items: [
          { dataText: row.name, imgSrc: row.img1 },
          { dataText: row.lang, imgSrc: row.img2 },
          { dataText: row.category, imgSrc: row.img3 },
          { dataText: row.description, imgSrc: row.img4 },
        ],
      }));
    },

    transformGraphicProjects(rows) {
      return rows.map((row) => ({
        link: "#",
        items: [
          { dataText: row.name, imgSrc: row.img },
          { dataText: "平面設計", imgSrc: row.img },
          { dataText: row.subtitle, imgSrc: row.img },
          { dataText: row.description, imgSrc: row.img },
        ],
        descCn: row.descCn || "",
        descEn: row.descEn || "",
        concept: row.concept || "",
      }));
    },

    formatDate(dateStr) {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return String(dateStr).substring(0, 10);
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    clearPortfolioCache() {
      localStorage.removeItem(CACHE_KEY);

    },
  },
  mounted() {
    this.loadPortfolioData();

    const observeFadeIn = (selector) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-up");
            }
          });
        },
        { threshold: 0.2 }
      );
      elements.forEach((el) => observer.observe(el));
      window.addEventListener("scroll", this.handleScroll);
    };

    observeFadeIn(".year");
    observeFadeIn(".word");
    observeFadeIn(".project-row");

    /* 初始化訪客統計 */
    this.initVisitorTracking();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);

    /* 清理訪客統計資源 */
    if (this.visitorInterval) {
      clearInterval(this.visitorInterval);
    }
  },
});

app.mount("#app");
