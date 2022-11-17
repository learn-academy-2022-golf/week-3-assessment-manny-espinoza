# ASSESSMENT 3: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.
Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX (acronym for JavaScript eXtensive Markup Language) is a form of JavaScript syntax that allows HTML code to be written within JavaScript files, and coincide with applications of react. It allows developers to create totally separate files meant for handling specific components of their webpage, and then to call upon those files on the main page in the text editor (for example, the App.js files from what we've been working on and practicing with). Files utilizing JSX must contain an import section which allows the files to work with the react app, an export section that allows those files to be called to the main page (App.js), and the actual code in which the JSX syntax is utilized. To show differing syntaxes between HTML and JSX for example, a JSX code snippet that calls upon another page will look like this, while an HTML element looks like this.
    const App = () => {
        return (
            <>
                <callUponAnotherFileHere />   (looks like a self-closing HTML tag)
                <h1>This would be your regular HTML element, which can still have attributes placed within the opening tag and has it's contents written between the tags.
                </h1>
            </>
        )
    }

Researched answer: JSX is JavaScript markdown that behaves like HTML. It is a syntax extension to be paired in use with react, and also utilizes the use of curly braces {} to "house" JavaScript functionality inside of inter-HTML (between HTML tags). For instance, one might want to call upon a JavaScript variable in between a set of HTML tags and it would look something like this.
    let name = Manny
    const nameFunction = <h1>Hello there, {name}!</h1>
Any acceptable JavaScript expression, function, or otherwise may exist between the curly braces that itself exists inside of HTML components. So in addition to JSX allowing for HTML to be written inside of JavaScript file, it also allows for JavaScript code snippets to live inside HTML elements. Cool!



2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a testing framework within JavaScript that allows for developers to test out their pieces of code (functions for instance, and what we know because that's what we've been practicing with) rather than testing their code with methods we've used thus far (for example, console logging different arguments passed into function invocation). Yarn testing will give developers a fully detailed list of errors that their code may have encountered and is a handy way to fix problematic functions. When the command ($ yarn) is ran in the terminal, we're granted some extra files that allow the yarn testing framework to properly work, such as (but probably not including everything because I can't remember all of them) a node file with a bunch of nested files within, and (maybe) a testing file.

Researched answer: Yarn is a package manager that contains many pieces of code, including those extra files that are added to an existing JavaScript file/folder when ($ yarn) is run in the terminal. Those other files that are modified include a yarn.lock file, package.json, and the node_modules file (which I elaborated on earlier). All of these files are essentially, many pieces of code that depend on other pieces of code, and these dependencies are what make up yarn and allow for the functionality of the testing framework.



3. What is an anonymous function in JavaScript?

Your answer: An anonymous function in JavaScript is one syntax for creating functions. It is what we assign to a variable (which ultimately becomes the function), and for example might look like this.
    const exampleFunction = () => {}
The parentheses of the anonymous function can be filled out to take in desired parameters suitable to the function's purpose, and the code block (curly braces) is what actually happens depending on what kind of outcomes the developer wants to see.

Researched answer: An anonymous function does not necessarily have to follow the far arrow notation that I described earlier, but more precisely an anonymous function is simply a function without a name. It is used to make function invocation (after the initial function creation) easier, so that it may be called on by the variable name it is assigned to. Continuing with my example function from earlier, let's say that I gave it a parameter of string and a code block that console logs some words in addition to whatever string I pass to it. It would then look like this.
    const exampleFunction = (string) => {
        console.log("Hey there, ", string)
    }
    exampleFunction("Manny")
    // -> Hey there, Manny
Lines 43-45 serve as the creation of the function using anonymous function syntax, and it is assigned to the variable name exampleFunction. It takes in a string as its parameter, but can take multiple arguments upon actual function invocation (line 46).



4. What is the difference between state values and props in React?

Your answer: State values in react are how we store default inputs for variables that we create, whereas props in react are how different variables created within different files are passed into the main file and made functional on the react application.

Researched answer: State and props (short for properties) are both JavaScript objects that handle how information is rendered or passed through in the react application. To elaborate on my explanation from earlier, state handles data that already exists on the main component (App.js for example) and doesn't need to be passed into any other files that are working together to create react app functionality. Props on the other hand handles data existing in other files (any files that may live in the components folder, like we've seen in the practice examples and challenges from this week), and it gets passed into the main file. It could be said that state is internal (or handled by parent components) while props is external (handled by child components).



5. What is the DOM?

Your answer: The DOM is a component of react that allows for only specific elements of a webpage to be updated without the need to refresh the entire page (for instance, when you "like" a post on social media the only things that get updated are the like icon and the number of people that like that specific post, but the entire page doesn't need to be refreshed).

Researched answer: The DOM (acronym for Document Object Model) is a visual representation of code that may be thought of as something like a tree diagram, housing all of the involved HTML components. I think my initial answer was incorrect, and what I was actually thinking of relates to react events.



6. STRETCH: Which is the difference between a div and a span?

Your answer: Both being HTML components, a div allows for developers to section off pieces of code so that they're more easily readable on the webpage, while a span.. I forgot what that does.

Researched answer: So div and span are both HTML components that allow the user to section off pieces of code and visually render those separations on the webpage, but their purposes are slightly different. Div components are more useful in "blocking" sections within the webpage, and it can be easier to style entire sections of the webpage when using div components. With span components, they're more commonly used to handle specified portions of inline elements. So in summary, while both div and span components are used for sectioning off parts of webpages, divs are used to style entire sections while spans are used to style inline components and only portions of those inline components if specified.



## Looking Ahead: Terms for Next Week
1. Object-oriented programming: Opposite of how we've learned to code things so far with JavaScript, object-oriented programming (OOP) is programming that involves around the objects of the code themselves rather than programming that operates around logic and functionality of components. It focuses on those individual objects and allows for developers to manipulate that, rather than needing to manipulate the code that in turn alters those desired objects.

2. Ruby: Ruby is another popular coding/programming language used by developers worldwide, and is object-oriented (as discussed above!). It too can be used in creation of webpages, various data processing tools/services, and applications.

3. Implicit return: When a function during creation, or maybe a HOF doesn't require the return keyword because it is implied that that return keyword is already there, that is known as implicit return. We have seen examples of this in the higher-order functions lesson. When using .map()/.filter() methods, and the code block requires a short and simple line of code, it is okay to omit the return keyword as it is already implied within the program.

4. Ruby blocks: Anonymous functions that can be passed into methods. Blocks are (according to what I've researched so far and what I can interpret/understand) similar to functions in JavaScript, but have some syntax differences. Multi-line blocks in ruby begin and end with keywords do/end, OR if written on a single-line then they can simply be enclosed with curly braces {}.

5. Ruby hashes: Ruby hashes are similar to JavaScript objects, in that they are collections of data organized by key and value pairs. The positioning (indexes) of hashes differ than that of objects or arrays in JavaScript however.