import React from 'react';

const skills = [
    {
        animation: false,
        name: 'HTML',
        url: 'html',
        star: 5,
        note: false
    },
    {
        animation: false,
        name: 'CSS',
        url: 'css',
        star: 4,
        note: false
    },
    {
        animation: false,
        name: 'SCSS',
        url: 'scss',
        star: 5,
        note: (
            <span>
                I'm working with it in the last 3 years and it's too powerfull
                to come back to pure CSS. I prefer this to LESS due to following
                the community.
            </span>
        )
    },
    {
        animation: false,
        name: 'Less',
        url: 'less',
        star: 4,
        note: (
            <span>
                I have to work with LESS language because Magento e-commerce has
                it in the base package.
            </span>
        )
    },
    {
        animation: false,
        name: 'JavaScript',
        url: 'javascript',
        star: 5,
        note: (
            <span>
                I constantly keep me update with the last feature of it because
                i{' '}
                <span role="img" aria-label="love">
                    ❤️
                </span>{' '}
                it. This is a list of all the frameworks/libraries that i have
                worked until now:
                <ul>
                    <li>underscore js</li>
                    <li>knockout js</li>
                    <li>require js</li>
                    <li>jquery</li>
                    <li>anime js</li>
                    <li>aurora js</li>
                    <li>vueJs</li>
                    <li>reactJs</li>
                </ul>
            </span>
        )
    },
    {
        animation: false,
        name: 'React',
        url: 'react',
        star: 4,
        note: (
            <span>
                I'm working with ReactJs in the last year in some Alpenite's
                projects and personal. I really appreciate the structure of
                ReactJs and how it works. It makes me so happy that sometimes i
                want to use it everywhere! In the last 6 months I'm studying it
                in a Typescript environment that help me to better understand
                how the library works. I said library because i think that the
                main difference between React and Angular (for example) is that
                you have to add other packages to React for use it at full
                potential. Instaed Angular is a complete package that doens't
                need other things to give you a complete suite. I have some
                React Native experience too.
            </span>
        )
    },
    {
        animation: false,
        name: 'VueJs',
        url: 'vuejs',
        star: 3,
        note: (
            <span>
                I didn't play very much with Vue, i just chill with
                vuestorefront of Divante Ltd. I think that they did an amazing
                job and i hope to have more time in the future to help them like
                i did before.
            </span>
        )
    },
    {
        animation: false,
        name: 'NodeJs',
        url: 'nodejs',
        star: 4,
        note: (
            <span>
                The world of NodeJs is too big to be a Master of it in 3 years
                of experience. <br />
                I've create some NodeJs structure to get me at this level like:
                <ul>
                    <li>REST Api with MongoDb in order to store data</li>
                    <li>Static pages templating with gulp and nunjucks</li>
                    <li>Static pages templating with grunt and handlebars</li>
                    <li>Webpack customization for a custom CRA of ReactJs</li>
                    <li>
                        Webpack and Typescript for a custom data structure with
                        Hybris technology
                    </li>
                </ul>
            </span>
        )
    },
    {
        animation: false,
        name: 'PHP',
        url: 'php',
        star: 3,
        note: (
            <span>
                I'm working with it in some project with Magento, Magento 2 and
                Magento Cloud platform. And I'm able to make my own module in
                order to be autonomous.
            </span>
        )
    },
    {
        animation: false,
        name: 'Linux',
        url: 'linux',
        star: 3,
        note: (
            <span>
                I have a little knowledge of linux and his system, this is a
                MUST for me because I have access to production environment of
                my Magento projects.
            </span>
        )
    },
    {
        animation: false,
        name: 'Docker',
        url: 'docker',
        star: 4,
        note: (
            <span>
                I made my own local environment for all of my project with
                docker, that NOW is just an easy "docker-compose up -d". This
                helped me a lot in my working routine.
            </span>
        )
    },
    {
        animation: false,
        name: 'Photoshop',
        url: 'photoshop',
        star: 2,
        note: (
            <span>
                I have the knowledge that let me take all the data that i need
                from GFX in order to reproduce it on a web application. Now I'm
                working only on Pixel Perfece and Mobile First web application.
                Sketch too!
            </span>
        )
    }
];

const projects = [
    {
        name: 'Stiga',
        role: 'Frontend Reference',
        link: 'https://www.stiga.com/'
    },
    {
        name: 'G&BNegozio',
        role: 'Frontend Reference',
        link: 'https://www.gebnegozionline.com/'
    }
];

export { skills, projects };
