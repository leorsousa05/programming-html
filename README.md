# Programming HTML

##### HTML With Programming Logic
Sometimes you need to create some for loops or conditionals in VanillaJS but it takes a long time for creating the script, querying the elements and creating the logic behind the component... Well that's over!

[Examples](https://github.com/leorsousa05/programming-html/tree/main/examples) 

### Usage
On this code we use the If Element and a conditional attribute to create a if and else with HTML components. As we know the basics of programming logic, the *H1* tag inside of the *if* element, is the tag that'll be rendered if the conditional returns true. Inside of the *if* element, we have the *else* element, that everything insides of it is rendered in case that *if* conditional returns false.

```html
<if-element conditional="7+7=14">
  <h1>The calculation is right, good job!</h1>

  <else-element>
    <h1>The calculation wrong, sorry!</h1>
  </else-element>
</if-element>

<if-element conditional="number === 2">
  <h1>The calculation is right!</h1>
</if-element>

<script>
  const number = 2;
</script>
<script type="module" src="../lib/main.ts"></script>
```
With loops the logic is the same, we have a *forEach* element that returns a *forEach* of a list/array made on a javascript code and you can also return the element you want to print the list items out. The *for* loop is the simplest one, you just set the range you want to print a tag out with some text and use it. 
```html
<script>
    const marketList = ["banana", "apple", "orange"];
</script>

<ul>
    <foreach-element list="marketlist" element="li"></foreach-element>
</ul>

<forloop-element range="0..5">
    <h1>That's cool, 6 times :)</h1>
</forloop-element>

<script type="module" src="../lib/main.ts"></script>
```

### Cloning The Repository
```
git clone https://github.com/leorsousa05/programming-html
```
