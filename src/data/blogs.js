const blogs = [
    {
        id: 1,
        title: "What is ReactJS?",
        category: "ReactJS",
        description: "Learn the basics of ReactJS and why it is used.",
        content: `
ReactJS is a JavaScript library used for building user interfaces.

React was developed by Facebook and is widely used for creating
modern single-page applications.

React uses a component-based architecture, which makes applications
easier to develop, maintain, and reuse.
        `,
        author: "Tushar Patel",
        date: "2026-09-01"

    },

    {
        id: 2,
        title: "Understanding React Components",
        category: "ReactJS",
        description: "Learn how components work in React.",
        content: `
Components are one of the most important concepts in React.

A component is a reusable piece of UI.

Components help developers divide a large application into smaller
and manageable parts.
        `,
        author: "Tushar Patel",
        date: "2026-09-02"

    },

    {
        id: 3,
        title: "JavaScript ES6 Features",
        category: "JavaScript",
        description: "Learn important modern JavaScript features.",
        content: `
ES6 introduced many useful features to JavaScript.

Some important features include:

- let and const
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Rest operator
- Modules
        `,
        author: "Tushar Patel",
        date: "2026-09-03"

    },

    {
        id: 4,
        title: "Understanding useState",
        category: "React Hooks",
        description: "Learn how useState manages state in React.",
        content: `
useState is a React Hook that allows functional components
to manage state.

Example:

const [count, setCount] = useState(0);

When setCount is called, React updates the component.
        `,
        author: "Tushar Patel",
        date: "2026-09-04"

    }
];

export default blogs;