// Write your code here!

document.querySelector("main");

main.remove(main);

// newHeader.Victory === H1; 

// newHeader.id 
const newHeader = document.createElement("h1");

newHeader.id = "victory";


newHeader.innerHTML = "Alisca is the champion";





// expect(newHeader.nodeName, create an <h1> with id 'victory'").eql('H1')

// expect(newHeader.id, create an <h1> with id 'victory'").eql('victory')

// expect(newHeader.innerHTML, create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");