const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      siteTitle: "YEN-LING",
      isMenuOpen: false,
      navActive: false,
      navItems: [
        { label: "PROJECTS", link: "project.html" },
        { label: "INFO", link: "info.html" },
        { label: "CONTACT", link: "contact.html" },
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
            "Chaoyang University of Technology, Master<br>朝陽科技大學　碩士　2023",
            "Chaoyang University of Technology, Bachelor<br>朝陽科技大學　學士　2022",
            "University of Regensburg, Exchange<br>德國雷根斯堡大學　交換生　2022",
            "Chuang jia xin Engineering Consultants, project management facility<br>創價心工程顧問公司　專案管理師　2023-2024",
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
  methods: {
    toggleMenu() {
      this.navActive = !this.navActive;
      this.isMenuOpen = !this.isMenuOpen;
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
    };

    observeFadeIn(".year");
    observeFadeIn(".word");
  },
});

app.mount("#app");
