// Assuming `_` represents some library or object
const _ = {
    mark: {
        items: [
            { name: 'Group 1', value: 10 },
            { name: 'Group 2', value: 20 },
            { name: 'Group 3', value: 30 }
        ]
    }
};

// Using forEach to iterate over items
_.mark.items.forEach(group => {
    console.log(group.name + ': ' + group.value);
});

// Output:
// Group 1: 10
// Group 2: 20
// Group 3: 30
