### Countries of the World App with React

### Objective:

Develop a React single-page application (SPA) that showcases detailed information about countries based on currency codes. This application aims to highlight your ability to use React's `useEffect` and `useRef` hooks, the Context API for advanced state management, React Router for SPA navigation, and includes debounced search, a dynamic favorites feature, and search history tracking.

### Data Source:

- REST Countries API: Fetch country details (name, currency, capital, languages, flag) by currency code using the endpoint **`https://restcountries.com/v3.1/currency/{CURRENCY_CODE}`**.
- Flags API for country flags: `https://flagsapi.com/{CC}/shiny/64.png` (replace `{CC}` with the country code).
- Country codes mapping: Assume a separate endpoint `https://api.example.com/country-codes` provides this mapping in JSON format.

### Core Features:

- **Initial Page Guidance**: When no search has been performed, the page should display a welcoming message or image encouraging the user to start searching. The "History" section on the Homepage will also indicate that no data is available, prompting the user to initiate a search.
- **Country Details Display**: Dynamically render details of countries, such as name, currency, capital, languages, and flag, based on the user's currency code search.
- **Debounced Search**: Incorporate a debounced search to efficiently query countries by currency code, reducing unnecessary API calls.
- **Sorting Functionality**: Allow users to sort displayed countries alphabetically in both ascending and descending order.
- **Favorites Feature & Route**:
  - Enable users to mark countries as favorites, changing the visual appearance of the country card to reflect its status.
  - Include a "Favorites" route/page that exclusively displays countries marked as favorites.
- **Search History Tracking**:
  - Implement a context to record the last five unique searches and display these in a "History" section on the Homepage, ensuring no duplicates.
- **Focus on Search Input**: Automatically focus the search input field using `useRef` when the Homepage component is rendered, enhancing user experience by facilitating immediate interaction.

### Technical Specifications:

- **React Hooks**: Employ `useEffect` for fetching data and managing side effects, and `useRef` to automatically focus on the search input field upon the Homepage loading.
- **Context API**: Use the Context API to manage favorites and search history, allowing these states to be accessible and modifiable across the application.
- **React Router**: Implement React Router for navigating between the Homepage and the Favorites Page without reloading the browser, ensuring a seamless user experience.
- **User Guidance for Initial State**: Design the Homepage to encourage user interaction through a message or image when no search data is available and similarly for the search history section.

### Deliverables:

- The full source code of the SPA, including all React components, Context API setups for managing favorites and search history, and routing configurations.
- A README file providing setup and running instructions, along with descriptions of the application's features and an explanation of the implemented functionalities such as debouncing, context management, routing, and the automatic focusing of the search input.

### Evaluation Criteria:

- **Functionality**: All features, especially the debounced search, favorites management, search history tracking, and automatic focusing on the search input, must be correctly implemented.
- **Code Quality**: The code should be clean, well-organized, and follow React development best practices.
- **User Experience**: The application should offer an intuitive, responsive design with clear instructions for user interaction from the start.
- **Innovative Use of React**: Demonstrates a comprehensive understanding of React through the effective combination of hooks, context, routing, and UI enhancements to create a dynamic and user-friendly SPA.
