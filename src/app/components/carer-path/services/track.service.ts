import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {


  stages = [
    {
      name: 'Web Fundamentals',
      id: 'fundamentals',
      icon: 'fas fa-globe',
      steps: [
        {
          id: 'html5',
          title: 'HTML',
          icon: 'fab fa-html5',
          color: '#e34f26',
          backgroundColor: '#ffeee6',
          description: ' HTML is the standard markup language for creating web pages and web applications ',
          skills: [
            {
              name: 'HTML Basics',
              description: 'HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.Visit the following resources to learn more: ',
              resources: [
                {
                  name: 'Free Resources',
                  articles: [
                    { type: "Article", title: 'W3Schools: Learn HTML', url: 'https://www.w3schools.com/html/html_intro.asp' },
                    { type: "Article", title: 'web.dev: Learn HTML', url: 'https://web.dev/learn/html' }
                  ],
                  videos: [
                    { type: "English Video", title: "HTML Full Course - Build a Website Tutorial", url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE' },
                    { type: "Arabic video", title: "HTML Full Course", url: 'https://www.youtube.com/watch?v=qfPUMV9J5yw' }
                  ]
                },
                {
                  name: 'Premium Resources',
                  videos: [
                    { type: "English Video", title: "Scrimba - Frontend Developer Career Path", url: 'https://scrimba.com/the-frontend-developer-career-path-c0j' },
                    { type: "English Video", title: "Scrimba - Learn Responsive Web Design", url: 'https://scrimba.com/learn-responsive-web-design-c029' },
                    { type: "English Video", title: "Scrimba - From Figma to Code", url: 'https://scrimba.com/from-figma-to-code-c02f' },
                    { type: "English Video", title: "seScrima - Learn UI Design", url: 'https://scrimba.com/learn-ui-design-c024' }
                  ]
                }
              ]
            },
            {
              name: 'Semantic HTML',
              description: 'Semantic HTML refers to the use of HTML markup to reinforce the meaning of web content, rather than merely defining its appearance. It involves using HTML elements that clearly describe their purpose and content. Semantic HTML improves accessibility, SEO, and code readability. Key elements include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. It also encompasses using appropriate heading levels (<h1> to <h6>), lists (<ul>, <ol>,<li>), and data tables (<table>, <th>, <td>). Semantic HTML helps screen readers interpret page content, enables better browser rendering, and provides clearer structure for developers. By using semantically correct elements, developers create more meaningful, accessible, and maintainable web documents that are easier for both humans and machines to understand and process.Visit the following resources to learn more: ',
              resources: [
                {
                  name: 'Free Resources',
                  Article1: "https://cs.fyi/guide/writing-semantic-html",
                  Article2: "https://www.w3schools.com/html/html5_semantic_elements.asp",
                  Article3: "https://web.dev/learn/html/semantic-html/",
                  videoEn: "https://www.youtube.com/watch?v=bOUhq46fd5g",
                  videoAr: "https://www.youtube.com/watch?v=qfPUMV9J5yw",

                },
                {
                  name: 'Premium Resources',
                  course1: "https://scrimba.com/the-frontend-developer-career-path-c0j",
                  course2: "https://scrimba.com/learn-responsive-web-design-c029",
                  course3: "https://scrimba.com/from-figma-to-code-c02f",
                  course4: "https://scrimba.com/learn-ui-design-c024",
                }
              ]
            },
            {
              name: 'Forms and Validations',
              description: 'Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls. Visit the following resources to learn more: ',
              resources: [
                {
                  name: 'Free Resources',
                  Article1: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation",
                  Article2: "https://web.dev/learn/forms/",
                  Article3: "https://www.w3schools.com/js/js_validation.asp",
                  videoEn: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
                  videoAr: "https://www.youtube.com/watch?v=qfPUMV9J5yw",
                },
                {
                  name: 'Premium Resources',
                  course1: "https://scrimba.com/the-frontend-developer-career-path-c0j",
                  course2: "https://scrimba.com/learn-responsive-web-design-c029",
                  course3: "https://scrimba.com/from-figma-to-code-c02f",
                  course4: "https://scrimba.com/learn-ui-design-c024",
                }
              ]
            },
            {
              name: 'Accessibility',
              description: 'Website accessibility is the practice of designing and developing websites that can be used by everyone, including people with disabilities. It involves implementing features and standards that make web content perceivable, operable, understandable, and robust for all users, regardless of their physical or cognitive abilities. This includes providing text alternatives for images, ensuring keyboard navigation, using sufficient color contrast, offering captions for audio content, and creating a consistent and predictable layout. Adhering to accessibility guidelines not only improves usability for people with disabilities but also enhances the overall user experience for all visitors while potentially increasing a site’s reach and legal compliance.  Visit the following resources to learn more: ',
              resources: [
                {
                  name: 'Free Resources',
                  Article1: "https://web.dev/accessibility",
                  Article2: "https://web.dev/learn/html",
                  videoEn: "https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g",
                  Feed: "https://app.daily.dev/tags/accessibility?ref=roadmapsh",
                },
                {
                  name: 'Premium Resources',
                  course1: "https://scrimba.com/the-frontend-developer-career-path-c0j",
                  course2: "https://scrimba.com/learn-responsive-web-design-c029",
                  course3: "https://scrimba.com/from-figma-to-code-c02f",
                  course4: "https://scrimba.com/learn-ui-design-c024",
                }
              ]
            },
            {
              name: 'Basics of SEO',
              description: 'SEO (Search Engine Optimization) basics involve strategies to improve a website’s visibility and ranking in search engine results. Key elements include creating relevant, high-quality content, proper use of keywords, optimizing meta tags and URLs, ensuring mobile-friendliness, improving site speed, and building quality backlinks. SEO also focuses on user experience, including easy navigation and responsive design. Technical aspects like XML sitemaps, HTTPS security, and structured data markup play crucial roles. Understanding user intent, regularly updating content, and adhering to search engine guidelines are essential practices. Effective SEO combines on-page optimization, off-page tactics, and technical enhancements to increase organic traffic, improve user engagement, and enhance online presence in an increasingly competitive digital landscape.  Visit the following resources to learn more: ',
              resources: [
                {
                  name: 'Free Resources',
                  course1: "https://www.youtube.com/watch?v=xsVTqzratPs",
                  course2: "https://www.youtube.com/watch?v=8YDUP-RH_4g",
                  Article1: "https://developers.google.com/search/docs",
                  Feed: "https://app.daily.dev/tags/seo?ref=roadmapsh",
                },
                {
                  name: 'Premium Resources',
                  course1: "https://scrimba.com/the-frontend-developer-career-path-c0j",
                  course2: "https://scrimba.com/learn-responsive-web-design-c029",
                  course3: "https://scrimba.com/from-figma-to-code-c02f",
                  course4: "https://scrimba.com/learn-ui-design-c024",
                }
              ]
            }
          ],
          resources: [
            {
              name: 'Free',
              course: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
              Article: 'https://www.w3schools.com/html/html_intro.asp',
              video1: 'https://www.youtube.com/watch?v=mJgBOIoGihA',
              video2: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
              feed: 'https://app.daily.dev/tags/html?ref=roadmapsh',
              icon: 'fas fa-book'
            },
            {
              name: 'Premium',
              course1: 'https://v2.scrimba.com/the-frontend-developer-career-path-c0j?via=roadmap',
              course2: 'https://v2.scrimba.com/learn-responsive-web-design-c029?via=roadmap',
              course3: 'https://v2.scrimba.com/from-figma-to-code-c02f?via=roadmap',
              course4: 'https://v2.scrimba.com/learn-responsive-web-design-c029?via=roadmap',
              icon: 'fas fa-stethoscope'
            },
          ],
          duration: '2-3 weeks',
          level: 'Beginner'
        },
        {
          id: 'css3',
          title: 'CSS3',
          icon: 'fab fa-css3-alt',
          color: '#264de4',
          backgroundColor: '#e6eeff',
          description: 'Modern CSS including Flexbox, Grid, animations and responsive design',
          skills: ['Flexbox', 'CSS Grid', 'Animations', 'Responsive Design', 'Variables'],
          resources: [
            { name: 'CSS Tricks', url: 'https://css-tricks.com', icon: 'fas fa-palette' },
            { name: 'Grid by Example', url: 'https://gridbyexample.com', icon: 'fas fa-th' },
            { name: 'Flexbox Froggy', url: 'https://flexboxfroggy.com', icon: 'fas fa-frog' }
          ],
          duration: '3-4 weeks',
          level: 'Beginner'
        },
        {
          id: 'javascript-es6',
          title: 'JavaScript & ES6+',
          icon: 'fab fa-js-square',
          color: '#f7df1e',
          backgroundColor: '#fffae6',
          description: 'Modern JavaScript features and best practices',
          skills: ['ES6+ Syntax', 'DOM Manipulation', 'Async/Await', 'Promises', 'Modules'],
          resources: [
            { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net', icon: 'fas fa-book' },
            { name: 'You Don\'t Know JS', url: 'https://github.com/getify/You-Dont-Know-JS', icon: 'fab fa-github' },
            { name: 'JavaScript.info', url: 'https://javascript.info', icon: 'fas fa-info-circle' }
          ],
          duration: '4-6 weeks',
          level: 'Beginner'
        }
      ]
    },
    {
      name: 'Frontend Tools',
      id: 'tools',
      icon: 'fas fa-tools',
      steps: [
        {
          id: 'git',
          title: 'Git & Version Control',
          icon: 'fab fa-git-alt',
          color: '#f05032',
          backgroundColor: '#feece8',
          description: 'Version control and collaboration with Git',
          skills: ['Git Commands', 'Branching', 'Merging', 'GitHub/GitLab'],
          resources: [
            { name: 'Pro Git Book', url: 'https://git-scm.com/book', icon: 'fas fa-book' },
            { name: 'GitHub Learning Lab', url: 'https://lab.github.com', icon: 'fab fa-github' },
            { name: 'Learn Git Branching', url: 'https://learngitbranching.js.org', icon: 'fas fa-code-branch' }
          ],
          duration: '2-3 weeks',
          level: 'Beginner'
        },
        {
          id: 'npm',
          title: 'Package Managers',
          icon: 'fab fa-npm',
          color: '#cb3837',
          backgroundColor: '#ffebee',
          description: 'Working with npm/yarn and package management',
          skills: ['npm/yarn', 'package.json', 'Dependencies', 'Scripts'],
          resources: [
            { name: 'npm Docs', url: 'https://docs.npmjs.com', icon: 'fas fa-book' },
            { name: 'Yarn Docs', url: 'https://yarnpkg.com/getting-started', icon: 'fas fa-book' }
          ],
          duration: '1-2 weeks',
          level: 'Beginner'
        },
        {
          id: 'build-tools',
          title: 'Build Tools',
          icon: 'fas fa-cogs',
          color: '#4db6ac',
          backgroundColor: '#e0f2f1',
          description: 'Modern JavaScript build tools and bundlers',
          skills: ['Webpack', 'Vite', 'Babel', 'ESLint', 'Prettier'],
          resources: [
            { name: 'Webpack Guide', url: 'https://webpack.js.org/guides/', icon: 'fas fa-book' },
            { name: 'Vite Docs', url: 'https://vitejs.dev/guide/', icon: 'fas fa-bolt' }
          ],
          duration: '2-3 weeks',
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'Frontend Frameworks',
      id: 'frameworks',
      icon: 'fas fa-layer-group',
      steps: [
        {
          id: 'react',
          title: 'React',
          icon: 'fab fa-react',
          color: '#61dafb',
          backgroundColor: '#e6f7ff',
          description: 'Building user interfaces with React',
          skills: ['Components', 'Hooks', 'Context', 'JSX', 'React Router'],
          resources: [
            { name: 'React Docs', url: 'https://react.dev', icon: 'fas fa-book' },
            { name: 'React Tutorial', url: 'https://react-tutorial.app', icon: 'fas fa-graduation-cap' }
          ],
          duration: '4-6 weeks',
          level: 'Intermediate'
        },
        {
          id: 'vue',
          title: 'Vue.js',
          icon: 'fab fa-vuejs',
          color: '#42b883',
          backgroundColor: '#e8f5e9',
          description: 'The progressive JavaScript framework',
          skills: ['Components', 'Directives', 'Vuex', 'Composition API'],
          resources: [
            { name: 'Vue Docs', url: 'https://vuejs.org/guide/introduction.html', icon: 'fas fa-book' },
            { name: 'Vue Mastery', url: 'https://www.vuemastery.com', icon: 'fas fa-graduation-cap' }
          ],
          duration: '3-5 weeks',
          level: 'Intermediate'
        },
        {
          id: 'angular',
          title: 'Angular',
          icon: 'fab fa-angular',
          color: '#dd0031',
          backgroundColor: '#ffebee',
          description: 'Platform for building web applications',
          skills: ['Components', 'Directives', 'Services', 'RxJS', 'Dependency Injection'],
          resources: [
            { name: 'Angular Docs', url: 'https://angular.io/docs', icon: 'fas fa-book' },
            { name: 'Angular University', url: 'https://angular-university.io', icon: 'fas fa-graduation-cap' }
          ],
          duration: '4-6 weeks',
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'Advanced Topics',
      id: 'advanced',
      icon: 'fas fa-brain',
      steps: [
        {
          id: 'typescript',
          title: 'TypeScript',
          icon: 'fas fa-code',
          color: '#3178c6',
          backgroundColor: '#e6f0ff',
          description: 'Typed superset of JavaScript',
          skills: ['Types', 'Interfaces', 'Generics', 'Decorators', 'Utility Types'],
          resources: [
            { name: 'TypeScript Docs', url: 'https://www.typescriptlang.org/docs/', icon: 'fas fa-book' },
            { name: 'TypeScript Deep Dive', url: 'https://basarat.gitbook.io/typescript/', icon: 'fas fa-database' }
          ],
          duration: '3-4 weeks',
          level: 'Intermediate'
        },
        {
          id: 'state-management',
          title: 'State Management',
          icon: 'fas fa-project-diagram',
          color: '#6a1b9a',
          backgroundColor: '#f3e5f5',
          description: 'Managing complex application state',
          skills: ['Redux', 'Context API', 'MobX', 'NgRx', 'Pinia'],
          resources: [
            { name: 'Redux Docs', url: 'https://redux.js.org', icon: 'fas fa-book' },
            { name: 'NgRx Docs', url: 'https://ngrx.io/docs', icon: 'fas fa-book' }
          ],
          duration: '3-5 weeks',
          level: 'Advanced'
        },
        {
          id: 'testing',
          title: 'Testing',
          icon: 'fas fa-vial',
          color: '#388e3c',
          backgroundColor: '#e8f5e9',
          description: 'Frontend testing methodologies',
          skills: ['Jest', 'Testing Library', 'Cypress', 'Vitest', 'Test Coverage'],
          resources: [
            { name: 'Testing Library', url: 'https://testing-library.com', icon: 'fas fa-vial' },
            { name: 'Jest Docs', url: 'https://jestjs.io', icon: 'fas fa-book' },
            { name: 'Cypress Docs', url: 'https://docs.cypress.io', icon: 'fas fa-book' }
          ],
          duration: '3-4 weeks',
          level: 'Intermediate'
        }
      ]
    },
    {
      name: 'Performance & Optimization',
      id: 'performance',
      icon: 'fas fa-tachometer-alt',
      steps: [
        {
          id: 'web-performance',
          title: 'Web Performance',
          icon: 'fas fa-stopwatch',
          color: '#ff7043',
          backgroundColor: '#fff3e0',
          description: 'Optimizing frontend performance',
          skills: ['Lazy Loading', 'Code Splitting', 'Caching', 'Bundle Analysis'],
          resources: [
            { name: 'Web.dev Performance', url: 'https://web.dev/learn/#performance', icon: 'fas fa-book' },
            { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/overview/', icon: 'fas fa-search' }
          ],
          duration: '2-3 weeks',
          level: 'Advanced'
        },
        {
          id: 'web-security',
          title: 'Web Security',
          icon: 'fas fa-shield-alt',
          color: '#0288d1',
          backgroundColor: '#e3f2fd',
          description: 'Frontend security best practices',
          skills: ['CORS', 'CSRF', 'XSS', 'Content Security Policy'],
          resources: [
            { name: 'OWASP Security', url: 'https://owasp.org/www-project-top-ten/', icon: 'fas fa-shield-alt' },
            { name: 'Security Checklist', url: 'https://web.dev/security/', icon: 'fas fa-check-circle' }
          ],
          duration: '2-3 weeks',
          level: 'Advanced'
        }
      ]
    },
    {
      name: 'Modern CSS',
      id: 'modern-css',
      icon: 'fas fa-paint-brush',
      steps: [
        {
          id: 'css-frameworks',
          title: 'CSS Frameworks',
          icon: 'fab fa-css3-alt',
          color: '#2196f3',
          backgroundColor: '#e3f2fd',
          description: 'Working with CSS frameworks and methodologies',
          skills: ['Tailwind CSS', 'Bootstrap', 'CSS-in-JS', 'BEM', 'Utility-First'],
          resources: [
            { name: 'Tailwind Docs', url: 'https://tailwindcss.com/docs', icon: 'fas fa-book' },
            { name: 'Bootstrap Docs', url: 'https://getbootstrap.com/docs', icon: 'fas fa-book' }
          ],
          duration: '2-3 weeks',
          level: 'Intermediate'
        },
        {
          id: 'design-systems',
          title: 'Design Systems',
          icon: 'fas fa-swatchbook',
          color: '#7b1fa2',
          backgroundColor: '#f3e5f5',
          description: 'Building and maintaining design systems',
          skills: [
            'Storybook',
            'Component Libraries', 'Design Tokens', 'Theming'],
          resources: [
            { name: 'Storybook', url: 'https://storybook.js.org', icon: 'fas fa-book' },
            { name: 'Design Systems Repo', url: 'https://designsystemsrepo.com', icon: 'fas fa-bookmark' }
          ],
          duration: '3-4 weeks',
          level: 'Advanced'
        }
      ]
    }
  ];

  filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'not-started', label: 'Not Started' }
  ];

  constructor(private firestore: Firestore) { }

  getTrack(trackId: string): Observable<any> {
    const trackRef = doc(this.firestore, 'tracksData', trackId);
    return docData(trackRef).pipe(
      map(data => {
        if (!data) {
          throw new Error('Track not found');
        }
        return data;
      }),
      catchError(error => {
        console.error('Error loading track:', error);
        return of(null); // Return null if error occurs
      })
    );
  }

  getAllTracks(): Observable<any[]> {
    const ref = collection(this.firestore, 'tracksData');
    return collectionData(ref, { idField: 'id' });
  }


}
