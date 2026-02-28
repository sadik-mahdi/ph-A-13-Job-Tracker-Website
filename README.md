## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
	Ans : getElementById grabs element by specific ID name, getElementsByClassName grabs element of HTML collection by class name, and querySelector grabs by only first matched element / querySelectorAll grabs all the matched elements

### 2. How do you create and insert a new element into the DOM?
	Ans : 1. Create the element 
		  2. Configure it with innerText , adding or removing elements by class or others
		  3. Insert it into the DOM by using getelements option 
		  4. Adds to the end of the container by appendChild.

### 3. What is Event Bubbling? And how does it work?
	Ans : when an event like 'click' happens,it also happens towards the parents too. If you click a button inside a div, the click event triggers on the button   	first, then the div, then the body, and finally the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
	Ans : Adding an event listener to their parent.
	Why it’s useful:
	  It’s faster for the browser to track one listener than 100.
	  If you add a new job card to your list later, the parent will automatically write more code.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
	preventDefault(): Stops the browser from doing its default action.
	stopPropagation(): Stops the event bubble.
