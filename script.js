class Counter {
    constructor(initialValue = 1, maxValue = 1000) {
      this.value = initialValue;
      this.maxValue = maxValue;
    }
  
    increment() {
      if (this.value < this.maxValue) {
        this.value++;
      } else {
        console.log('Counter has reached its maximum value.');
      }
    }

    decrement(){
      if(this.value > 0){
        this.value --;
      }else{
        console.log('Counter has reached its minimum value.');
      }
    }
  
    setValue(newValue) {
      if (newValue <= this.maxValue) {
        this.value = newValue;
      } else {
        console.log('Value exceeds the maximum value.');
        this.value = this.maxValue;
      }
    }
  
    getValue() {
      return this.value;
    }
  }
  
  let counter;
  const initialValueInput = document.getElementById('initialValue');
  const maxValueInput = document.getElementById('maxValue');
  const counterInput = document.getElementById('counterInput');
  const counterValueDisplay = document.getElementById('counterValue');
  

  function initializeCounter() {
    const initialValue = parseInt(initialValueInput.value) || 1;
    const maxValue = parseInt(maxValueInput.value) || 1000;
    counter = new Counter(initialValue, maxValue);
    counterValueDisplay.textContent = counter.getValue();
    counterInput.value = counter.getValue();
  }
  
  function incrementCounter() {
    counter.increment();
    counterValueDisplay.textContent = counter.getValue();
    counterInput.value = counter.getValue();
  }
  
  function decrementCounter() {
    counter.decrement();
    counterValueDisplay.textContent = counter.getValue();
    counterInput.value = counter.getValue();
  } 

  function updateCounterValue() {
    const newValue = parseInt(counterInput.value);
    if (!isNaN(newValue)) {
      counter.setValue(newValue);
      counterValueDisplay.textContent = counter.getValue();
    }
  }
  
  window.onload = initializeCounter;
  