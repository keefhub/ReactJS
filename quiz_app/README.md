# Conditional Rendering

A quiz app will be built where different questions will appear based on previous answers.

# Rendering loop

Unnecessary repetition can be removed by using loop.

### Note

Each child in a list should have a unique key prop. Key should be unique to all elements displayed on the webpage
for instance, a structure of a node would look like this

    <node>
        <child1 />
        <child2 />
        <child3 />
    </node>

It is easy to point to child2 and make relevant changes but, not for react. Without a key:

    node
    |-- children(length:3)
    <node>
        {elements.map(child => <child />)}

With key:

    node
    |-- chidlren(length:3) [key:0, key:1, key:2]
    <node>
    {elements.map((child,index)=><child key={index} />)}

map is used to return the list of elements as we modify each of it. if we use a construct {forEach} then, we would not be returning modified list
with key, react is able to locate the 2nd child and update it without bothering the rest of the list of elements.
