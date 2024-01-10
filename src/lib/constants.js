export const NavLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Certifications' ];

export const SocialLinks = [
    {
        name: 'github',
        href: 'https://github.com/GowriPriya10',
        src: '/socialIcons/github.svg',
        width: 40,
        height: 40
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/gowripriya-eppa/',
        src: '/socialIcons/linkedin.svg',
        width: 40,
        height: 40
    },
    {
        name: 'mail',
        href: 'mailto:eppa.gowripriya@gmail.com',
        src: '/socialIcons/mail.svg',
        width: 40,
        height: 40
    }
]

export const roles = ['Front-End Developer', 'Full Stack Developer'];

export const aboutMe = 'Hello there!! I am GowriPriya Eppa, an enthusiastic software developer with a specialization in front-end development utilizing JavaScript and various frameworks and libraries. Possessing a talent for designing engaging and seamless user experiences, I excel in transforming concepts into visually appealing and functional web applications. Additionally, I am proficient in utilizing Node.js and Express.js to construct robust backends.'

export const whyMe = [
    {
        title: 'Front-End Wizardry',
        description: 'Transforming ideas into captivating interfaces is my forte, with a strong command of JavaScript and React js to create engaging web applications.'
    },
    {
        title: 'Versatile Backend Skills',
        description: 'Well-versed in building scalable server-side applications with Node js and Express js, ensuring a seamless end-to-end development experience.'
    },
    {
        title: 'Agile Learning Mindset',
        description: 'Faced with challenges, my attitude is not just "can do" but "can learn." I thrive on adapting to the unknown, turning problems into opportunities for growth. Every project becomes a chance to expand my skill set and deliver innovative solutions.'
    },
    {
        title: 'Collaborative Flexibility',
        description: 'Whether working independently or as part of a team, I bring a versatile and collaborative spirit to every project. This adaptability ensures effective contributions and successful project outcomes.'
    }
]

const frontEndSkills = [
    {
        name: 'javascript',
        src: '/skills/javascript.svg',
        title: 'Javascript'
    },
    {
        name: 'react',
        src: '/skills/react.svg',
        title: 'React Js'
    },
    {
        name: 'krakenjs',
        src: '/skills/krakenjs.svg',
        title: 'Kraken Js'
    },
    {
        name: 'next',
        src: '/skills/nextjs.svg',
        title: 'Next Js'
    },
    {
        name: 'typescript',
        src: '/skills/typescript.svg',
        title: 'Typescript'
    },
    {
        name: 'webpack',
        src: '/skills/webpack.svg',
        title: 'Webpack'
    },
    {
        name: 'tailwind',
        src: '/skills/tailwindcss.svg',
        title: 'Tailwind'
    },
    {
        name: 'sass',
        src: '/skills/sass.svg',
        title: 'Sass'
    },
    {
        name: 'css',
        src: '/skills/css.svg',
        title: 'CSS'
    },
    {
        name: 'html',
        src: '/skills/html.svg',
        title: 'HTML'
    }
];

const backEndSkills = [
    {
        name: 'node',
        src: '/skills/node.svg',
        title: 'Node Js'
    },
    {
        name: 'express',
        src: '/skills/expressjs.svg',
        title: 'Express Js'
    },
    {
        name: 'mongodb',
        src: '/skills/mongodb.svg',
        title: 'Mongo DB'
    }
];

const otherSkills = [
    {
        name: 'git',
        src: '/skills/git.svg',
        title: 'Git'
    },
    {
        name: 'postman',
        src: '/skills/postman.svg',
        title: 'PostMan'
    }
];

export const SkillSectionConfig = [
    {
        section: 'FrontEnd',
        skills: frontEndSkills
    },
    {
        section: 'BackEnd',
        skills: backEndSkills
    },
    {
        section: 'Other',
        skills: otherSkills
    }
]

export const AchievementsConfig = [
    {
        title: 'Cheers Award – Most Determined Employee',
        src: '/certs/Award 3.png'
    },
    {
        title: 'Cheers Award - Doing the right thing, the right way',
        src: '/certs/Award 2.png'
    },
    {
        title: 'Cheers Award - Doing the right thing, the right way',
        src: '/certs/Award 1.png'
    }
]

export const certificates = [
    {
        title: 'AWS Certified Cloud Practitioner',
        desc: 'Issued Feb 2022 | Credential ID ZQ7QFZMJM1EQQR3H',
        link: '/certs/AWS CCP Certificate.pdf'
    },
    {
        title: 'Complete Web Developer in 2019:Zero to Mastery',
        link: '/certs/ZTM Certificate.pdf'
    }
]

export const workDetails = [
    {
        role: "Associate",
        company: "Cognizant",
        timeline: "Dec 2022 - Present",
        place: "Hyderabad, India",
        desc: {
            project: "PayPal",
            summary: [
                "Developed dynamic data and document collection interfaces for users, including CIP, ReKYC, Venmo TapToPay, Name Change, etc., to facilitate resolution of account limitations and enhance payment experiences.",
                "Implemented reusable UI components to improve overall application efficiency.",
                "Collaborated with diverse stakeholders throughout the Software Development Life Cycle (SDLC) to ensure project success and timely completion.",
                "Engaged in the code review process and actively resolving identified bugs to maintain code integrity and application reliability."
            ]
        }
    },
    {
        role: "Programmer Analyst",
        company: "Cognizant",
        timeline: "Oct 2021 - Dec 2022",
        place: "Hyderabad, India",
        desc: {
            project: "PayPal",
            summary: [
                "<b>Reduced the payload size</b> of Node JS based mid-tier application's API by <b>~97%</b> which resulted in faster page load time of the front-end page and <b>decrease in 95th percentile CPL by ~27%.</b>",
                "<b>Improved the performance</b> of KrakenJS based application by <b>reducing ~20% of the bundle size.</b>",
                "Developed dynamic data and document collection interfaces for users to resolve their account limitations and have smoother payments experience."
            ]
        }
        
    },
    {
        role: "Programmer Analyst Trainee",
        company: "Cognizant",
        timeline: "Oct 2020 - Oct 2021",
        place: "Hyderabad, India",
        desc: {
            project: "PayPal",
            summary: [
                "Improved application reliability by addressing failing unit tests and enhancing test coverage of a node js based mid-tier application",
                "Successfully resolved bugs to ensure the application's stability."
            ]
        }
    }
]

export const eduDetails = [
    {
        major: "Bachelor of Engineering",
        institution: "MVSR Engineering College",
        timeline: "2016 - 2020",
        place: "Hyderabad",
        desc: "CGPA: 8.62"
    },
    {
        major: "M.P.C",
        institution: "Sr. Chaitanya Jr. College",
        timeline: "2014 - 2016",
        place: "Hyderabad",
        desc: "Percentage: 96.1"
    }
]
