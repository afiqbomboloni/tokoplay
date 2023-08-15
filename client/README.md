# Tokopedia Play Gigih
Tokopedia Play GIGIH is a website for viewing product video reviews interactively because there is a live comment feature. This project uses the React library and several other technologies such as Tailwind css.
## Features
a. **Multi-Page Experience**:

-   Home Page: Display a list of YouTube video thumbnails.
-   Video Detail Page: View detailed information about a selected video, including embedded YouTube video, product list, comment section, and comment submission form.

b. **YouTube Video List**:

-   The home page showcases a list of YouTube video thumbnails, allowing users to quickly preview available videos.

c. **Video Detail Page**:

-   Users can click on a video thumbnail to access the video's detail page, where they can explore associated products, watch the embedded YouTube video, view comments, and submit their own comments.

d. **Product List and Comment Section**:

-   The video detail page displays a list of related products, the embedded YouTube video, and a section for user comments.
-   Users can interact with the comment section and submit comments via a user-friendly form.

e. **Comment Submission**:

-   Users can easily submit comments by providing their name and comment content in the comment submission form.

f. **Real-time Comment Display**:

-   After successfully submitting a comment, users can see their comment appear in the comment section in real-time.

g. **Search Functionality**:

-   Users can search for videos by their title, enhancing the browsing experience.

h. **User Profile and Avatar**:

-   The upper-right corner of the home page features a user profile section, including an avatar.
## How to Install and Run

## Prerequisites 
Before running this project, make sure you have the following installed on your machine: 
- [Node.js](https://nodejs.org/en)

## How to Run

- Clone the repo and open the project.
	```
	git clone https://github.com/afiqbomboloni/tokoplay.git
	cd client
	```
- Install the dependencies
`npm install`

- Set up environment variables:
Create  `.env`  file
    
    You can copy the  `env`  and change its values.
    ```
    cp env.example .env
    ```
- Running Application:

	```
	npm run start
Application will running on port :3000
