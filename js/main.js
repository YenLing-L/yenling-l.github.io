const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      isMenuActive: false,
      mouseX: -200,
      mouseY: -200,
      siteTitle: "YEN-LING",
      showBackToTop: false,
      scrollProgress: 0,
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
            part1: "Website & Design",
            part2: "| 網站與設計",
          },
          projects: [
            {
              link: "muyifang.html",
              items: [
                { dataText: "木藝坊", imgSrc: "img/muyifang_logo.png" },
                { dataText: "Vue.js", imgSrc: "img/muyifang01.png" },
                { dataText: "家具設計", imgSrc: "img/muyifang02.png" },
                { dataText: "流程介紹", imgSrc: "img/muyifang03.png" },
              ],
            },
            {
              link: "RandomStation.html",
              items: [
                { dataText: "測試網站", imgSrc: "img/RS01.png" },
                { dataText: "Vue.js", imgSrc: "img/RS02.png" },
                { dataText: "隨機車站", imgSrc: "img/RS03.png" },
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
                { dataText: "Javascript", imgSrc: "img/game3.png" },
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
                { dataText: "No offense", imgSrc: "img/34.png" },
                { dataText: "INHOUR", imgSrc: "img/YEN LING.png" },
                { dataText: "雜誌封面", imgSrc: "img/雜誌2.png" },
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
    openMenu() {
      this.isMenuActive = true;
    },
    closeMenu() {
      this.isMenuActive = false;
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});

app.mount("#app");
