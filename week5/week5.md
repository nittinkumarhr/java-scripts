# Week -5 
## DOM Introduction :
- Data object Model.
- Dom is like tree from structure.
- DOM is a programming interface for web documents and  manipulate HTML and XML .
- DOM represents the page so that programs can change the document structure, style and content.
- **The DOM was designed to be independent of any particular programming language**, making the structural representation of the document available from a single, consistent API.

## 4 Pillers of dom 
1. Selections of elements.
2. Manipulation of elements or Change Html.
3. Change Css.
4. Event Listner.


    ### Node Array      
## Selection of elements :
- There are 3 ways to select elements.
1. By id.
2. By class.
3. By tag name.

## Manipulation of elements or Change Html :
- We can change the html content of any element by using **innerHTML property**.
- We can change the css of any element by using **style property**.
- We can change the attribute of any element by using **setAttribute property**.
## Change Css :
- We can change the css of any element by using **style property**.

## Event Listner :
- Event Listner is a function that is called in response to an event.
- Event Listner is used to trigger an event when a user performs an action.
- Event Listner is used to add interactivity to web pages.




## DOM Tree :
- DOM Tree is a tree like structure that represents the HTML document.
- DOM Tree is used to manipulate the HTML document.
- DOM Tree is used to access the HTML elements.
- DOM Tree is used to change the HTML elements.
- DOM Tree is used to add the HTML elements.
- DOM Tree is used to remove the HTML elements.
- Example :
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1 id="main-heading">Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
```
Document
  ├── html
  |   ├── head
  |   |   └── title
  |   └── body
  |       ├── h1 (id="main-heading")
  |       └── p
```
- In the above example, the DOM Tree is represented as a tree like structure.

## Fundamental data types in Dom:

- **Document** :-
The document is the root of the DOM hierarchy. It represents the entire HTML or XML document and serves as an entry point for accessing and manipulating the content of the page.

    - **Key Properties and Methods:**

      - **document.body:** Accesses the <body> element of the document.
      - **document.head:** Accesses the <head> element.
      - **document.getElementById(id):** Retrieves an element by its ID.
      - document.querySelector(selector):** Returns the first element matching the specified CSS selector.
      - **document.querySelectorAll(selector):** Returns all elements matching the specified CSS selector
- **Node :**
  - The Node interface is a fundamental building block of the DOM. It represents a single node in the DOM tree, which could be an element, text, or comment.
  - ### Types of Nodes:
    - **Element Node:** Represents an HTML or XML element.
    - **Text Node:** Represents the text content of an element.
    - **Comment Node:** Represents a comment in the HTML or XML document.
    - **Document Node:** Represents the entire document.
    - **DocumentFragment Node:** Represents a fragment of a document.
    - **Attribute Node:** Represents an attribute of an element.
    - **DocumentType Node:** Represents the DOCTYPE declaration of an HTML or XML document.

    ### Key Properties and Methods:
    - **nodeType:** Returns the type of the node.
    - **nodeName:** Returns the name of the node.
    - **nodeValue:** Returns the value of the node.
    - **parentNode:** Returns the parent node of the current node.
    - **childNodes:** Returns a collection of child nodes.
    - **firstChild:** Returns the first child node.
    - **lastChild:** Returns the last child node.
    - **nextSibling:** Returns the next sibling node.
    - **previousSibling:** Returns the previous sibling node.
    - **appendChild(node):** Adds a node to the end of the list of children of a specified parent node.
    - **removeChild(node):** Removes a child node.

    ### Node Array 

    - **NodeList:** Represents a collection of nodes.
    - **HTMLCollection:** Represents a collection of elements.

    ### Key Properties and Methods:

    - **length:** Returns the number of nodes in the collection.
    - **item(index):** Returns the node at the specified index.
    - **namedItem(name):** Returns the node with the specified name.
    

    





## How to Select Html Elements :
- We can select HTML elements by using **getElementById()**, **getElementsByClassName()**, **getElementsByTagName()** and **querySelector()** methods.
- We can select HTML elements by using **id**, **class**, **tag name** and **css selector**.
- We can select HTML elements by using **querySelectorAll()** method.
- We can select HTML elements by using **document** object.
- We can select HTML elements by using **parentElement**, **children**, **firstChild**, **lastChild**, **nextSibling**, **previousSibling** and **nextElementSibling** properties.

## How to Change Html Elements :
- We can change HTML elements by using **innerHTML**, **textContent**, **value** and **style** properties.
- We can change HTML elements by using **setAttribute()** method.
- We can change HTML elements by using **classList** property.
- We can change HTML elements by using **removeAttribute()** method.
- We can change HTML elements by using **createElement()**, **appendChild()** and **removeChild()** methods.

## How to Add Event Listeners :
- We can add event listeners by using **addEventListener()** method.
- We can add event listeners by using **onclick**, **onmouseover**, **onmouseout**, **onmousedown**, **onmouseup**, **onmousemove**, **onkeydown**, **onkeypress**, **onkeyup** and **onchange** properties.
- We can add event listeners by using **event** object.
- We can add event listeners by using **event.preventDefault()** method.

## Defernce between **innerHTML** and **textContent** :
- **innerHTML** is used to get or set the HTML content of an element.
- **textContent** is used to get or set the text content of an element.

## Defernce between **createElement()** and **appendChild()** :
- **createElement()** is used to create a new element.
- **appendChild()** is used to add a new element to an existing element.
## Defernce between **removeAttribute()** and **removeChild()** :
- **removeAttribute()** is used to remove an attribute from an element.
- **removeChild()** is used to remove a child element from an element.



