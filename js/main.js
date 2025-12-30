const { createApp } = Vue;

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
      navItems: [
        {
          title: "PROJECTS",
          link: "project.html",
          subItems: [
            { text: "網站　WEBSITE", link: "project.html" },
            { text: "平面　GRAPHIC", link: "project.html" },
          ],
        },
        {
          title: "INFO",
          link: "index.html",
          image:
            "https://notion-avatar.app/api/svg/eyJmYWNlIjo4LCJub3NlIjozLCJtb3V0aCI6MTIsImV5ZXMiOjMsImV5ZWJyb3dzIjo3LCJnbGFzc2VzIjowLCJoYWlyIjo1MCwiYWNjZXNzb3JpZXMiOjgsImRldGFpbHMiOjEsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InRyYW5zcGFyZW50Iiwic2hhcGUiOiJjaXJjbGUifQ==",
          subItems: [
            { text: "經歷　EXPERIENCE", link: "index.html" },
            { text: "專長　EXPERTISE", link: "index.html" },
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
            { text: "HaveFun", link: "#" },
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
            "朝陽科技大學　碩士　2023<br>Chaoyang University of Technology, Master",
            "朝陽科技大學　學士　2022<br>Chaoyang University of Technology, Bachelor",
            "德國雷根斯堡大學　交換生　2022<br>University of Regensburg, Exchange student",
            "創價心工程顧問公司　專案管理師　2023-2024<br>Chuang jia xin Engineering Consultants, Project manager",
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
          projects: [
            {
              link: "Lumos.html",
              items: [
                { dataText: "Lumos", imgSrc: "img/LM01.png" },
                { dataText: "Vue.js", imgSrc: "img/LM02.png" },
                { dataText: "燈具商店", imgSrc: "img/LM03.png" },
                { dataText: "案例分享", imgSrc: "img/LM04.png" },
              ],
            },
            {
              link: "CMS.html",
              items: [
                { dataText: "CMS管理系統", imgSrc: "img/CM01.png" },
                { dataText: "Vue.js", imgSrc: "img/CM02.png" },
                { dataText: "學生收費項目", imgSrc: "img/CM03.png" },
                { dataText: "管理平台", imgSrc: "img/CM04.png" },
              ],
            },
            {
              link: "muyifang.html",
              items: [
                { dataText: "木藝坊", imgSrc: "img/muyifang_logo.png" },
                {
                  dataText: "Vue.js",
                  imgSrc:
                    "https://images.unsplash.com/photo-1617384104622-5f04202ca46b?q=80&w=2705&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  dataText: "家具設計",
                  imgSrc:
                    "https://plus.unsplash.com/premium_photo-1704686580555-6f31384f756a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29vZCUyMGNoYWlyc3xlbnwwfHwwfHx8MA%3D%3D",
                },
                { dataText: "流程介紹", imgSrc: "img/muyifang01.png" },
              ],
            },
            {
              link: "RandomStation.html",
              items: [
                { dataText: "隨機車站", imgSrc: "img/RS01.gif" },
                { dataText: "Vue.js", imgSrc: "img/RS02.png" },
                { dataText: "隨機旅行", imgSrc: "img/RS03.png" },
                { dataText: "相關介紹", imgSrc: "img/RS04.png" },
              ],
            },
            {
              link: "inews.html",
              items: [
                { dataText: "映時新聞", imgSrc: "img/b5_logo.png" },
                { dataText: "Bootstrap", imgSrc: "img/bs5_web2.png" },
                { dataText: "Vue.js", imgSrc: "img/雜誌.png" },
                { dataText: "即時搜尋", imgSrc: "img/Scene.gif" },
              ],
            },
            {
              link: "green.html",
              items: [
                { dataText: "Green Energy", imgSrc: "img/green_logo.png" },
                { dataText: "Tailwind", imgSrc: "img/green_bg.jpg" },
                { dataText: "綠能顧問公司", imgSrc: "img/green3.png" },
                { dataText: "表單內容", imgSrc: "img/green2.png" },
              ],
            },
            {
              link: "game.html",
              items: [
                { dataText: "時光裂隙", imgSrc: "img/logo.png" },
                { dataText: "HTML", imgSrc: "img/game2.png" },
                { dataText: "Javascript", imgSrc: "img/game3.gif" },
                { dataText: "遊戲", imgSrc: "img/game4.png" },
              ],
            },
          ],
        },
        {
          title: {
            part1: "Graphic Design",
            part2: "| 平面設計",
          },
          projects: [
            {
              link: "#",
              items: [
                { dataText: "The echo of Time", imgSrc: "img/35.png" },
                { dataText: "平面設計", imgSrc: "img/35.png" },
                { dataText: "時間的回聲", imgSrc: "img/35.png" },
                { dataText: "海報設計作品", imgSrc: "img/35.png" },
              ],
            },
            {
              link: "#",
              items: [
                { dataText: "No offense", imgSrc: "img/34.png" },
                { dataText: "平面設計", imgSrc: "img/34.png" },
                { dataText: "無冒犯之意", imgSrc: "img/34.png" },
                { dataText: "視覺設計作品", imgSrc: "img/34.png" },
              ],
            },
            {
              link: "#",
              items: [
                { dataText: "INHOUR", imgSrc: "img/YEN LING.png" },
                { dataText: "平面設計", imgSrc: "img/YEN LING.png" },
                { dataText: "品牌形象設計", imgSrc: "img/YEN LING.png" },
                { dataText: "視覺識別系統", imgSrc: "img/YEN LING.png" },
              ],
            },
            {
              link: "#",
              items: [
                { dataText: "雜誌封面", imgSrc: "img/雜誌2.png" },
                { dataText: "平面設計", imgSrc: "img/雜誌2.png" },
                { dataText: "雜誌封面設計", imgSrc: "img/雜誌2.png" },
                { dataText: "排版與視覺設計", imgSrc: "img/雜誌2.png" },
              ],
            },
          ],
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
  },
  methods: {
    openProjectDetails(project, event) {
      if (event) {
        event.preventDefault();

        // 隱藏 hover 卡片
        this.hoverProject = null;

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

      // 當使用者開始滾動時顯示滾輪條
      if (scrollTop > 0 && !this.showDetailScrollbar) {
        this.showDetailScrollbar = true;
      }
    },
  },
  mounted() {
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});

app.mount("#app");
