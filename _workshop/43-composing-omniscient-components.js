---
layout: workshop
collection: workshop
title: Composing Omniscient Components
section: 3
name: 43-composing-omniscient-components
next: 36
slides: http://omniscientjs.github.io/workshop-talk
---

var component = omniscient.withDefaults({ jsx: true });

var data = {
  items: [
    { checked: true, text: 'Deadpool' },
    { checked: true, text: 'Wasp' },
    { checked: false, text: 'Iron Man' },
    { checked: true, text: 'Captain America' },
    { checked: true, text: 'Ant-Man' },
    { checked: false, text: 'Hulk' }
  ]
};

// create an Item component to render the item it is passed as a prop,
// completed items should be striked through by setting the style of the <li> that is returned
// the contents of the li should be the text of each item
var Item = component('Item', function ({item}) {
  var style = {
    textDecoration: item.checked ? 'line-through' : 'none',
  };
  return (
    <li style={style}>{item.text}</li>
  );
});

var List = component('List', ({items}) =>
  <div>
    <h1>Heroes used in slides</h1>
    <ul>
      // map over items and render an Item component for each
      // passing a key and an item prop to the component
      {items.map((item, i) =>
        <Item key={item.text} item={item} />
      )}
    </ul>
  </div>);


React.render(List(data), el);
