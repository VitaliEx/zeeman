// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
  }
  
  // Helper function to calculate the perimeter of a rectangle
  function calculatePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Main function to demonstrate the helper functions
  function main() {
    var length = 5;
    var width = 3;
    
    var area = calculateArea(length, width);
    var perimeter = calculatePerimeter(length, width);
    
    console.log("Area of the rectangle:", area);
    console.log("Perimeter of the rectangle:", perimeter);
  }
  
  // Call the main function to execute the code
  main();