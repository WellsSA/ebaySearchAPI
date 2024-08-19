Create an application to manage alerts for products prices on Ebay.com, through the app, an
user should be able to create an alert for specific products search phrase to be sent to his
email periodically.

Through this solution an user can create an alert by providing a search phrase, email address
and one of the values (2 minutes, 10 minute or 30 minutes) that specify how often he receives
an email with the updates.

According to the alert, the user will obtain the first 3 products sorted by the lowest price every
2, 10 or 30 minutes delivered to his email address.

Several alerts can be created for the same email address but with different search phrases.

Create all CRUD operations.

If you consider yourself a fullstack Developer, add a simple UI to (using React preferably)
create an alert and show current alerts.

Otherwise provide curl command examples to deal with the service through the terminal.

No need to add login or any way of authentication.

Use NodeJS for the backend and preferably MongoDB as the database.

The whole solution should be containerized using Docker.

We should be able to run the whole environment as easier as possible, ideally with: dockercompose up --build

Add tests whenever possible! Moreover, a short explanation for the solution architecture
chosen and an explanation on how to setup the project locally, run the tests, and any other
note should be placed in the readme file.

Other tools and technologies might be used to simplify the solution implementation. They
should also be mentioned in the Readme.

If any of the requirements isn’t clear, please make an assumption and mention it in the
readme file.

Provide a git repo.

You will get extra points for using the following:
- Redux or Context API
- Any pre-processor
- AiBNB styleguide

Tip: create a client app in eBay from this link https://developer.ebay.com to obtain the App ID
and use the searching api
