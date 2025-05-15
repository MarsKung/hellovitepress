export default {
    title: 'FUIYOO',
    description: '這是一個使用VitePress構建的網站',
    base: '/hellovitepress/',
    themeConfig: {
      nav: [
        { text: '首頁', link: '/' },
        { text: '指南', link: '/guide' },
        { text: '測試', link: '/test' }
      ],
      sidebar: {
        '/': [
          { text: '指南', link: '/guide' },
          { text: '測試', link: '/test' }
        ]
      }
    }
  }