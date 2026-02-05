const { createApp } = Vue;

const VISITOR_API_URL = "https://visitor-proxy.elenaaitest.workers.dev";
const SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycbwVrmIrJJnh56Gf6peYMKWeq64VkIY_77YU9gL_yevnfQ-UoRi2-Y6owwZ71b5j1z4/exec";
const CACHE_KEY = "portfolio_data_cache";
const CACHE_DURATION = 1000 * 60 * 60; /* 快取資料放1小時 */

const app = createApp({
  data() {
    return {
      isLoading: true,
      loadingProgress: 0,
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
          link: "info.html",
          image:
            "https://notion-avatar.app/api/svg/eyJmYWNlIjo4LCJub3NlIjozLCJtb3V0aCI6MTIsImV5ZXMiOjMsImV5ZWJyb3dzIjo3LCJnbGFzc2VzIjowLCJoYWlyIjo1MCwiYWNjZXNzb3JpZXMiOjgsImRldGFpbHMiOjEsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InRyYW5zcGFyZW50Iiwic2hhcGUiOiJjaXJjbGUifQ==",
          subItems: [
            { text: "經歷　EXPERIENCE", link: "info.html#Experience" },
            { text: "專長　EXPERTISE", link: "info.html#Expertise" },
            { text: "證照　CERTIFICATES", link: "info.html#Certificates" },
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
            "專注於前端開發與客製化網站設計的工程師，擅長透過流暢的介面轉場與細膩的互動設計，將創意構思轉化為功能完備且高效的網頁體驗。精通 RWD 響應式佈局與 Vue.js 框架開發，在視覺美學與技術實現之間取得平衡，為使用者帶來順滑且驚艷的瀏覽體驗。從產業需求出發，為企業量身定制兼具擴充性與功能性的數位解決方案，並賦予每個專案獨有的品牌價值與生命力。",
            '<span class="en-text">A frontend engineer specializing in custom web design, I excel at transforming creative concepts into functional and efficient web experiences through fluid interface transitions and delicate interaction design. Proficient in RWD and Vue.js, I strike a balance between visual aesthetics and technical implementation to deliver a seamless and stunning browsing experience. Starting from industry needs, I create tailored, scalable, and functional digital solutions for enterprises, imbuing every project with unique brand value and vitality.</span>',
          ],
        },
        {
          title: "Experience",
          subtitle: "經歷",
          hasDetails: true,
          content: [
            {
              text: '朝陽科技大學　行銷與流通管理　碩士　2023<br><span class="en-text">Chaoyang University of Technology, Marketing & Logistics, Master</span>',
              image:
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
              details: [
                {
                  text: "論文研究：消費者行為分析",
                  image:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
                },
                {
                  text: "數據分析專題",
                  image:
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                },
                {
                  text: "行銷策略規劃",
                  image:
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                },
                {
                  text: "學術發表與研討",
                  image:
                    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
                },
              ],
            },
            {
              text: '朝陽科技大學　行銷與流通管理　學士　2022<br><span class="en-text">Chaoyang University of Technology, Marketing & Logistics, Bachelor</span>',
              image:
                "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
              details: [
                {
                  text: "專題製作：電商平台設計",
                  image:
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                },
                {
                  text: "實習經驗累積",
                  image:
                    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
                },
                {
                  text: "社團幹部經歷",
                  image:
                    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
                },
                {
                  text: "學業成績優異",
                  image:
                    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
                },
              ],
            },
            {
              text: '德國雷根斯堡大學　交換生　2022<br><span class="en-text">University of Regensburg, Exchange Student</span>',
              image:
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
              details: [
                {
                  text: "跨文化溝通體驗",
                  image:
                    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=400&h=300&fit=crop",
                },
                {
                  text: "國際學術交流",
                  image:
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
                },
                {
                  text: "歐洲城市探索",
                  image:
                    "https://images.unsplash.com/photo-1473615695634-d284ec918736?w=400&h=300&fit=crop",
                },
                {
                  text: "語言能力提升",
                  image:
                    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
                },
              ],
            },
            {
              text: '創價心工程顧問公司　專案管理師　2023-2024<br><span class="en-text">Chuang Jia Xin Engineering Consultants, Project Manager</span>',
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
              details: [
                {
                  text: "專案進度管理",
                  image:
                    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop",
                },
                {
                  text: "客戶需求分析",
                  image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
                },
                {
                  text: "團隊協作協調",
                  image:
                    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
                },
                {
                  text: "文件撰寫與報告",
                  image:
                    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
                },
              ],
            },
            {
              text: '臺中教育大學進修推廣部　網頁前端設計師養成班　2024-2025<br><span class="en-text">Tyan Liu Technology Co., Ltd., Frontend Engineer</span>',
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
              details: [
                {
                  text: "網頁基礎建置",
                  image:
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
                },
                {
                  text: "UI/UX 設計",
                  image:
                    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
                },
                {
                  text: "程式語言",
                  image:
                    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                },
                {
                  text: "網路行銷技巧",
                  image:
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
                },
              ],
            },
            {
              text: '天鎏科技企業有限公司　網頁前端工程師　2025-迄今<br><span class="en-text">Tyan Liu Technology Co., Ltd., Frontend Engineer</span>',
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
              details: [
                {
                  text: "Vue.js 應用開發",
                  image:
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
                },
                {
                  text: "RWD 響應式設計",
                  image:
                    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
                },
                {
                  text: "UI/UX 介面優化",
                  image:
                    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
                },
                {
                  text: "動態效果實作",
                  image:
                    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
                },
              ],
            },
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
            "+886　910-632-166",
            '<a href="mailto:yenling061@gmail.com">yenling061@gmail.com</a>',
          ],
        },
      ],
      copyright: `copyright © ${new Date().getFullYear()} YEN-LING　All Rights Reserved.`,
      certificates: [],
      certificateSortKey: "id",
      certificateSortOrder: "asc",
      isFilterMenuOpen: false,
      portfolioCards: [],
      brandLogos: [
        { name: "Giant", url: "https://www.giant-bicycles.com/favicon.ico" },
        { name: "KKStream", url: "https://www.kkstream.com/favicon.ico" },
        { name: "Wistron", url: "https://www.wistron.com/favicon.ico" },
        {
          name: "Taipei Music Center",
          url: "https://tmc.taipei/wp-content/themes/tmc/assets/images/logo.png",
        },
        { name: "Qisda", url: "https://www.qisda.com/favicon.ico" },
        { name: "KKBOX", url: "https://www.kkbox.com/favicon.ico" },
        { name: "Gamania", url: "https://www.gamania.com/favicon.ico" },
        {
          name: "Taiwan Mobile",
          url: "https://www.taiwanmobile.com/favicon.ico",
        },
        { name: "Cathay", url: "https://www.cathayholdings.com/favicon.ico" },
      ],
      totalVisitors: 0,
      onlineVisitors: 0,
      sessionId: null,
      hoveredExperience: null,
      expandedExperience: null,
      isTouchDevice:
        window.matchMedia("(hover: none)").matches || "ontouchstart" in window,
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
    // 經驗區塊事件處理
    handleExpMouseEnter(sectionIndex, expIndex, image) {
      if (!this.isTouchDevice) {
        this.hoveredExperience = {
          section: sectionIndex,
          exp: expIndex,
          detail: null,
          image: image,
        };
      }
    },
    handleExpMouseLeave() {
      if (!this.isTouchDevice) {
        this.hoveredExperience = null;
      }
    },
    toggleExperience(sectionIndex, expIndex, image) {
      const key = `${sectionIndex}-${expIndex}`;
      if (this.expandedExperience === key) {
        this.expandedExperience = null;
        this.hoveredExperience = null;
      } else {
        this.expandedExperience = key;
        this.hoveredExperience = {
          section: sectionIndex,
          exp: expIndex,
          detail: null,
          image: image,
        };
      }
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
          ".expand-overlay-title",
        );
        const overlayImage = expandOverlay.querySelector(
          ".expand-overlay-image",
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
          "-=0.5",
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
          "-=0.5",
        );

        tl.add(() => {
          this.isDetailOpen = true;

          this.$nextTick(() => {
            const detailOverlay = document.querySelector(
              ".project-detail-overlay",
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
                ".project-info-grid .info-item",
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
                  },
                );
              });

              const galleryItems = document.querySelectorAll(
                ".project-gallery .gallery-item",
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
                  },
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
          ".expand-overlay-title",
        );
        const overlayLang = shrinkOverlay.querySelector(".expand-overlay-lang");
        const overlayImage = shrinkOverlay.querySelector(
          ".expand-overlay-image",
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
          { clearProps: "all" },
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
            "-=0.5",
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
            "-=0.5",
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
            "-=0.5",
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
        window.location.href = link;
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
            await this.runMinimumLoadingTime(1000);
            this.completeLoading();
            return;
          }
        }

        const [data] = await Promise.all([
          this.fetchAllSheetData(),
          this.runMinimumLoadingTime(1500),
        ]);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data,
            timestamp: Date.now(),
          }),
        );

        this.applySheetData(data);
        this.completeLoading();
      } catch (error) {
        console.error("Failed to load portfolio data:", error);
        this.completeLoading();
      }
    },

    async fetchAllSheetData() {
      const [
        certificates,
        websiteProjects,
        graphicProjects,
        portfolioCards,
        experiences,
      ] = await Promise.all([
        this.fetchSheetData("certificates"),
        this.fetchSheetData("websiteProjects"),
        this.fetchSheetData("graphicProjects"),
        this.fetchSheetData("portfolioCards"),
        this.fetchSheetData("經歷"),
      ]);
      return {
        certificates,
        websiteProjects,
        graphicProjects,
        portfolioCards,
        experiences,
      };
    },

    /* 最小載入時間（確保 logo 動畫完整顯示）*/
    async runMinimumLoadingTime(minDuration = 1500) {
      return new Promise((resolve) => setTimeout(resolve, minDuration));
    },

    async runLoadingAnimation() {
      await this.runMinimumLoadingTime(1500);
    },

    async fetchSheetData(sheetName) {
      const response = await fetch(`${SHEETS_API_URL}?sheet=${sheetName}`);
      if (!response.ok) throw new Error(`Failed to fetch ${sheetName}`);
      return response.json();
    },

    applySheetData(data) {
      if (data.certificates && data.certificates.length > 0) {
        this.certificates = data.certificates.map((cert) => ({
          ...cert,
          date: this.formatDate(cert.date),
        }));
      }

      /* 經歷資料 */
      if (data.experiences && data.experiences.length > 0) {
        const experienceSection = this.sections.find(
          (s) => s.title === "Experience",
        );
        if (experienceSection) {
          experienceSection.content = data.experiences.map((exp) => {
            /* 解析細項：中文細項、英文細項、細項圖片都用「|」分隔 */
            const detailsCn = exp.中文細項
              ? exp.中文細項.split("|").map((s) => s.trim())
              : [];
            const detailsEn = exp.英文細項
              ? exp.英文細項.split("|").map((s) => s.trim())
              : [];
            const detailImages = exp.細項圖片
              ? exp.細項圖片.split("|").map((s) => s.trim())
              : [];

            /* 組合 details 陣列 */
            const details = detailsCn.map((cn, idx) => ({
              text:
                cn +
                (detailsEn[idx]
                  ? `<br><span class="en-text">${detailsEn[idx]}</span>`
                  : ""),
              image:
                detailImages[idx] ||
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
            }));

            return {
              text:
                exp.中文標題 +
                `<br><span class="en-text">${exp.英文標題 || ""}</span>`,
              image:
                detailImages[0] ||
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
              details: details.length > 0 ? details : undefined,
            };
          });
        }
      }

      if (data.websiteProjects && data.websiteProjects.length > 0) {
        const webProjects = this.transformWebProjects(data.websiteProjects);

        this.portfolioSections = [
          {
            title: this.portfolioSections[0].title,
            projects: webProjects,
          },
          this.portfolioSections[1],
        ];
      }

      if (data.graphicProjects && data.graphicProjects.length > 0) {
        const graphicProjects = this.transformGraphicProjects(
          data.graphicProjects,
        );

        this.portfolioSections = [
          this.portfolioSections[0],
          {
            title: this.portfolioSections[1].title,
            projects: graphicProjects,
          },
        ];
      }

      /* 首頁 Portfolio 卡片資料 */
      if (data.portfolioCards && data.portfolioCards.length > 0) {
        this.portfolioCards = data.portfolioCards.map((card) => ({
          titleCn: card.titleCn || card.中文標題 || "",
          titleEn: card.titleEn || card.英文標題 || "",
          url: card.url || card.案例網址 || "#",
          image: card.image || card.案例圖片 || "",
        }));
      }

      this.$nextTick(() => {
        this.observeNewProjectRows();
      });
    },

    observeNewProjectRows() {
      const elements = document.querySelectorAll(
        ".project-row:not(.fade-in-up)",
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-up");
            }
          });
        },
        { threshold: 0.1 },
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
      if (!dateStr) return "";
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return String(dateStr).substring(0, 10);
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    clearPortfolioCache() {
      localStorage.removeItem(CACHE_KEY);
    },

    animateLoadingProgress(targetPercent, duration = 300) {
      return new Promise((resolve) => {
        const startPercent = this.loadingProgress;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const eased = 1 - Math.pow(1 - progress, 3);
          this.loadingProgress = Math.round(
            startPercent + (targetPercent - startPercent) * eased,
          );

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            this.loadingProgress = targetPercent;
            resolve();
          }
        };

        requestAnimationFrame(animate);
      });
    },

    completeLoading() {
      this.isLoading = false;

      // 立即添加 hidden class 並強制重繪（針對 iOS Safari）
      setTimeout(() => {
        const loadingScreen = document.querySelector(".loading-screen");
        if (loadingScreen) {
          loadingScreen.classList.add("hidden");
          // 強制瀏覽器重新計算樣式（iOS Safari fix）
          loadingScreen.style.display = "none";
          void loadingScreen.offsetHeight; // 觸發 reflow
        }

        // 恢復 body 滾動
        document.body.style.overflow = "";
        document.body.style.position = "";
      }, 2600);
    },
  },
  mounted() {
    // 鎖定 body 防止滾動（loading 期間）
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";

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
        { threshold: 0.2 },
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

if (
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html" ||
  window.location.pathname.endsWith("/index.html")
) {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener("load", () => {
      const tl = gsap.timeline();

      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".hero-cta",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".hero-scroll-indicator",
          {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );
    });

    gsap.utils.toArray(".section-header").forEach((header) => {
      // 如果是在 #service-intro 內的 header，跳過一般的動畫，改用後面的 timeline 處理
      if (header.closest("#service-intro")) return;

      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // #service-intro 專屬的序列動畫
    const serviceIntro = document.getElementById("service-intro");
    if (serviceIntro) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceIntro,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to("#service-intro .section-header", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          "#service-intro .service-description",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .to(
          "#service-intro .service-buttons",
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        );
    }

    // 段落內容區塊 fade in 動畫
    gsap.utils.toArray(".service-intro-right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".service-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".portfolio-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    const progressCircle = backToTop.querySelector("circle");

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      if (progressCircle) {
        progressCircle.style.strokeDashoffset = 138 - progress * 138;
      }

      if (scrollTop > 300) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        try {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } catch (error) {
          console.warn("Invalid selector:", href);
        }
      }
    });
  });

  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const required = form.querySelectorAll("[required]");
      let isValid = true;

      required.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      // 檢查性別是否已選擇
      const genderSelected = form.querySelector('input[name="gender"]:checked');
      const genderGroup = form.querySelector(
        ".form-group.required .radio-group",
      );
      if (!genderSelected) {
        isValid = false;
        if (genderGroup) {
          genderGroup.classList.add("error");
        }
      } else {
        if (genderGroup) {
          genderGroup.classList.remove("error");
        }
      }

      if (!isValid) {
        alert("請填寫所有必填欄位");
        return;
      }

      // 收集表單資料
      const formData = new FormData(form);

      // 處理複選框（我的需求主題）
      const topics = [];
      formData.getAll("topic").forEach((value) => topics.push(value));

      // 建立 URL 參數（使用 GET 請求避免 CORS preflight）
      const params = new URLSearchParams({
        action: "submitQuote",
        name: formData.get("name"),
        gender: formData.get("gender") || "",
        phone: formData.get("phone"),
        email: formData.get("email"),
        company: formData.get("company") || "",
        website: formData.get("website") || "",
        deadline: formData.get("deadline"),
        budget: formData.get("budget"),
        industry: formData.get("industry"),
        reference: formData.get("reference") || "",
        topics: topics.join(", "),
        requirements: formData.get("requirements"),
      });

      // 顯示提交中狀態
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = "提交中...";

      try {
        const response = await fetch(`${SHEETS_API_URL}?${params.toString()}`);

        if (!response.ok) {
          throw new Error("提交失敗");
        }

        const result = await response.json();

        if (result.status === "success" || result.result === "success") {
          alert("感謝您的詢問！我們已收到您的資料，會盡快與您聯繫。");
          form.reset();
        } else {
          throw new Error(result.message || "提交失敗");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("提交失敗，請稍後再試或直接來電 0910-632-166 聯繫我們。");
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        field.classList.remove("error");
      });
    });
  }
}
