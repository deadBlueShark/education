class ChartView {
  constructor(/* ... */) {
    if (new.target === ChartView) {
      throw new Error(`Abstract class ChartView cannot be instantiated.`)
    }
  }
}

new ChartView()

/*
The built-in property new.target contains a reference to the class written next
to the new keyword during instantiation. This is the class whose constructor was
first called in the inheritance chain.
*/
