### Inventory Management Application with React, Redux, and Chakra UI

### Objective:

Develop an Inventory Management Application that displays products from a provided JSON file. Utilize React for building the application, Redux for state management, and Chakra UI for styling. The app will feature product listings with pagination, the ability to edit product details, and a separate view for products marked as needing replenishment.

### Features:

- **Display Products**: Show products as cards using Chakra UI, including details such as Product Title, Price, and Quantity in Inventory.
- **Pagination**: Implement pagination to display 5 products per page, with "Next" and "Prev" buttons to navigate between pages.
- **Add Product**: Include an "Add Product" button to add new products to the inventory. Use a Chakra UI modal for the input form.
- **Edit Product**: Each product card should have an "Edit" button. Clicking this button opens a modal where the Price and Quantity can be edited. Submitting the form updates the product details.
- **Mark Products as Low in Quantity**: Each product card should have an “Low Inventory" button allowing products to be marked for replenishment, or `Low Inventory`. These marked products should be accessible on a separate route, **`/low-inventory`**.
- **Filter and Sorting**: Provide options to filter products based on attributes like price and quantity.

### Mock JSON Data (`products.json`):

```json
[
  {
    "id": 1,
    "title": "Product A",
    "price": 20,
    "quantity": 50
  },
  {
    "id": 2,
    "title": "Product B",
    "price": 15,
    "quantity": 30
  },
  {
    "id": 3,
    "title": "Product C",
    "price": 25,
    "quantity": 20
  }
  // Add more products up to 30...
]
```

Ensure the JSON file includes 30 product objects for use in the application.

### Redux Implementation:

- Use Redux to manage the application state, including the products list, current pagination, and the status of products marked as low in quantity.
- Implement actions and reducers for adding new products, updating product details, and toggling the replenishment status.

### UI Requirements:

- Use Chakra UI components for the layout, forms, buttons, and modals, ensuring a consistent and modern design.
- Ensure the application is responsive, providing a seamless experience across different devices.

### Bonus Feature:

- **Dynamic Pagination**: Allow users to choose the number of products displayed per page.

### Submission Guidelines:

- Submit your project code through GitHub, including a README with setup and operation instructions.
- Document any additional features or noteworthy design decisions.
- Ensure the code is well-commented and adheres to best practices.
