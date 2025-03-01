// Local Storage Keys
const POSTS_KEY = 'blind_clone_posts';
const PROFILE_KEY = 'blind_clone_profile';
const VERIFICATION_KEY = 'blind_clone_verification'; 
const SIGNED_IN_KEY = 'blind_clone_signed_in';
const USER_MAP_KEY = 'blind_clone_user_map';

let chartInstance; // Variable to hold the chart instance
	

// Default data
const defaultData = [
  {
    "Title": "Cyberbullying Incident",
    "Content": "I saw someone bullying me online and I don't know what to do. It's been going on for weeks and it's getting worse."
  },
  {
    "Title": "Struggling with Math",
    "Content": "I need help with math because I can't understand the geometry lessons and my grades are suffering."
  },
  {
    "Title": "Verbal Insults in Class",
    "Content": "Some classmates keep making mean comments during class. I feel like a victim and don't know how to stop them."
  },
  {
    "Title": "Excited for Prom",
    "Content": "I'm really excited about prom and trying to figure out the best dress option. Any recommendations?"
  },
  {
    "Title": "Physical Bullying",
    "Content": "I've been physically harassed in the hallway by a group of guys for no reason. It's happening every day and nobody seems to notice."
  },
  {
    "Title": "Failed a Test",
    "Content": "I completely failed my math test today. What can I do for better exam preparation next time?"
  },
  {
    "Title": "Feeling Isolated",
    "Content": "I feel really left out during lunch and wonder how to make friends in this school. "
  },
  {
    "Title": "Sexual Harassment",
    "Content": "Some inappropriate comments were made about a girl in my class. It made me feel really uncomfortable. What should I do?"
  },
  {
    "Title": "Finally Aced a Quiz",
    "Content": "I just got my first A on a math quiz! All the studying paid off and I'm so relieved."
  },
  {
    "Title": "Racial Bullying",
    "Content": "Some students keep making jokes about my race. I wonder why people are so aggressive and hostile."
  },
  {
    "Title": "Need Help with History",
    "Content": "The history project is due next week and I haven't started. Can anyone suggest some ideas for research?"
  },
  {
    "Title": "Social Bullying",
    "Content": "I noticed some girls spreading rumors about another girl in my class. This type of bullying is really sad and unfair."
  },
  {
    "Title": "Vandalism in the Bathroom",
    "Content": "Someone vandalized my locker. It's really upsetting",
    "null": [
      " and I think I know who it was but I'm too scared to confront them."
    ]
  },
  {
    "Title": "Excited for Graduation",
    "Content": "I can't believe graduation is only a few months away! I'm so curious about what the future holds."
  },
  {
    "Title": "Humiliation in PE",
    "Content": "I was humiliated during PE when kids made fun of my performance. It's been really stressful for my mental wellness."
  },
  {
    "Title": "Got an Award Today",
    "Content": "The teacher gave me an award for academic excellence today. I never expected it at all."
  },
  {
    "Title": "Cyberbullying from Anonymous Account",
    "Content": "Someone created an anonymous account to harass me online. It's stressing me out and I have no idea who it is."
  },
  {
    "Title": "Worried about Finals",
    "Content": "Finals are coming up and I'm really worried about my grades. Any advice on how to study effectively?"
  },
  {
    "Title": "Physical Bullying During Lunch",
    "Content": "Today someone tripped me during lunch and spilled all my food. It was humiliating and nobody helped."
  },
  {
    "Title": "Teacher Gave Extra Credit",
    "Content": "My teacher announced extra credit today and I'm grateful because my grades need a boost."
  },
  {
    "Title": "Verbal Bullying from Older Students",
    "Content": "Some seniors keep making mean remarks about the way I dress. It's bullying and I don't know how to handle it."
  },
  {
    "Title": "Happy to Be on Honor Roll",
    "Content": "I just found out I made the honor roll! I feel so proud of my hard work in my classes."
  },
  {
    "Title": "Feeling Nervous About Presentation",
    "Content": "I have to present my science project tomorrow. I wonder how I can improve my public speaking skills."
  },
  {
    "Title": "Theft in the Locker Room",
    "Content": "Someone stole my gym shoes from the locker room and I'm really upset. What should I do about it?"
  },
  {
    "Title": "Teacher Doesn't Like Me",
    "Content": "It feels like my teacher is always picking on me. I wonder if it's just my imagination or if they truly don't like me."
  },
  {
    "Title": "Cyberbullying Group Chat",
    "Content": "Some students made a group chat just to talk bad about me. It\u2019s a form of bullying and I'm really upset."
  },
  {
    "Title": "Got Detention Today",
    "Content": "I got detention for something I didn't do. I feel so unfairly treated and don't know how to talk to my teacher about it."
  },
  {
    "Title": "Physical Assault on the Bus",
    "Content": "Someone punched me on the bus today. I\u2019m terrified to ride it again and don\u2019t know how to report it."
  },
  {
    "Title": "Finally Finished a Big Project",
    "Content": "Just turned in the biggest project of the year! I hope my teacher appreciates the hard work I put in."
  },
  {
    "Title": "Religious Bullying in Class",
    "Content": "Someone made fun of my religion today. It's upsetting and I don't know how to respond."
  },
  {
    "Title": "Excited for Spring Break",
    "Content": "Spring break is almost here! I can't wait to take a break from school and relax."
  },
  {
    "Title": "Vandalism of My Property",
    "Content": "My textbook was vandalized",
    "null": [
      " and I have no idea who did it. This kind of aggression is so frustrating."
    ]
  },
  {
    "Title": "Feeling Overwhelmed with Assignments",
    "Content": "I have so many assignments this week",
    "null": [
      " I don't know how I'm going to manage my time effectively. Any tips?"
    ]
  },
  {
    "Title": "Cyberbullying on Social Media",
    "Content": "Someone is posting hurtful things about me online. It's really affecting my mental health."
  },
  {
    "Title": "Aced My Final",
    "Content": "I can\u2019t believe I got an A on my biology final! All those late nights studying finally paid off."
  },
  {
    "Title": "Verbal Bullying in Cafeteria",
    "Content": "Some kids were making fun of my lunch. This kind of bullying is hurtful",
    "null": [
      " and I don\u2019t know how to stand up for myself."
    ]
  },
  {
    "Title": "Teacher Praised Me in Class",
    "Content": "My history teacher praised my project in class today. It gave me confidence to continue studying hard."
  },
  {
    "Title": "Sexual Harassment in Hallways",
    "Content": "A group of boys made inappropriate comments toward me. It\u2019s humiliating",
    "null": [
      " and I don't know who to talk to about it."
    ]
  },
  {
    "Title": "Looking Forward to Summer",
    "Content": "Just a few more weeks until summer vacation! I can't wait to enjoy my time off from school."
  },
  {
    "Title": "Physical Bullying in Gym Class",
    "Content": "Someone threw a basketball at me during gym. I feel like they are bullying me on purpose."
  },
  {
    "Title": "Happy I Passed",
    "Content": "I finally passed my math class after struggling all year! I\u2019m so relieved and proud of my effort."
  },
  {
    "Title": "Humiliation in Front of Class",
    "Content": "I was asked to read out loud and my classmates laughed at me. I felt humiliated and embarrassed."
  },
  {
    "Title": "Racial Slurs in School Hallway",
    "Content": "Someone yelled racial slurs at me and I don\u2019t know how to respond. I\u2019m scared to tell anyone about it."
  },
  {
    "Title": "Got an A on My Paper",
    "Content": "I got an A on my English paper! My teacher said it was well-written and well-researched."
  },
  {
    "Title": "Cyberbullying in Group Project",
    "Content": "I'm in a group project and one person keeps posting rude things about me online. It's making it so difficult to collaborate."
  },
  {
    "Title": "Feeling Stressed About Grades",
    "Content": "I'm so stressed about my grades this semester. I wonder what my best option is to improve them."
  },
  {
    "Title": "Feeling Left Out at School",
    "Content": "It feels like everyone has their own group of friends and I'm just by myself. I'm really curious about how to find my place here."
  },
  {
    "Title": "Bullying Incident During Lunch",
    "Content": "Someone started throwing food at me in the cafeteria today. It was humiliating",
    "null": [
      " and I didn't know how to react."
    ]
  },
  {
    "Title": "Teacher Encouraged Me",
    "Content": "My teacher encouraged me to apply for the advanced math class! I'm excited but also a bit nervous."
  },
  {
    "Title": "Religious Bullying in Cafeteria",
    "Content": "Someone made fun of my prayer before eating lunch. I feel disrespected and wish people would be more understanding."
  },
  {
    "Title": "Worried About College Apps",
    "Content": "Everyone is talking about college applications and it's stressing me out. I don't know how to even start."
  },
  {
    "Title": "Cyberbullying Texts",
    "Content": "I keep receiving mean texts from someone at school. It's really affecting my mental health and I don\u2019t know who to tell."
  },
  {
    "Title": "Excited for Yearbook Photos",
    "Content": "Yearbook photos are coming up! I'm so curious to see how mine will turn out."
  },
  {
    "Title": "Got in Trouble for Something I Didn't Do",
    "Content": "The teacher blamed me for something I didn't even do today. I feel like I'm always getting in trouble for no reason."
  },
  {
    "Title": "Physical Assault During Recess",
    "Content": "Someone shoved me really hard during recess and now I\u2019m scared to go outside. It\u2019s really affecting my well-being."
  },
  {
    "Title": "Happy with My Report Card",
    "Content": "My report card came in today and I got all A's! I can't believe how much I've learned this year."
  },
  {
    "Title": "Cyberbullying Through DMs",
    "Content": "Someone is sending me hurtful messages through DMs. I\u2019m really upset and don\u2019t know how to stop it."
  },
  {
    "Title": "Excited for Senior Year",
    "Content": "Senior year is just around the corner! I\u2019m so curious about what the future holds and all the opportunities ahead."
  },
  {
    "Title": "Verbal Insults During PE",
    "Content": "Some students were making mean remarks during PE. I wonder how I can find support to deal with this bullying."
  },
  {
    "Title": "Scared About a Big Test",
    "Content": "I have a huge test tomorrow and I'm terrified. I feel overwhelmed and need some advice on studying."
  },
  {
    "Title": "Social Bullying in Gym",
    "Content": "Some girls in my gym class keep excluding me. It feels like social bullying",
    "null": [
      " and I'm not sure how to address it."
    ]
  },
  {
    "Title": "Feeling Overwhelmed with Clubs",
    "Content": "I signed up for too many clubs this year and now I feel overwhelmed with all the extracurricular activities."
  },
  {
    "Title": "Physical Bullying on the Playground",
    "Content": "Someone shoved me into the fence during recess. It hurt",
    "null": [
      " and I didn't know how to respond."
    ]
  },
  {
    "Title": "Excited for Yearbook",
    "Content": "Yearbook planning is underway and I can\u2019t wait to see everyone\u2019s ideas. It\u2019s such a fun school activity!"
  }
];


// Extended word list
const wordList = [
    'apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi',
    'lemon', 'mango', 'nectarine', 'orange', 'peach', 'pear',
    'plum', 'quince', 'raisin', 'strawberry', 'tangerine', 'watermelon',
    'airplane', 'basket', 'cat', 'dog', 'elephant', 'flower', 'giraffe',
    'house', 'igloo', 'jacket', 'kite', 'lamp', 'mountain', 'notebook',
    'octopus', 'pencil', 'quilt', 'robot', 'sunflower', 'turtle',
    'umbrella', 'vase', 'whale', 'xylophone', 'yacht', 'zebra',
    'almond', 'bread', 'coconut', 'dolphin', 'eggplant', 'firefly',
    'grapefruit', 'honey', 'island', 'jungle', 'koala', 'lizard',
    'mermaid', 'nest', 'ocean', 'penguin', 'quokka', 'rose',
    'sapphire', 'tree', 'unicorn', 'violet', 'yarn', 'zucchini',
    'avocado', 'butterfly', 'chocolate', 'daisy', 'eagle', 'falcon',
    'goblet', 'horizon', 'iceberg', 'jewel', 'kiwi', 'leopard',
    'mushroom', 'noodle', 'oatmeal', 'piano', 'quasar', 'rainbow',
    'squirrel', 'taco', 'ukulele', 'volcano', 'windmill', 'xenon',
    'yeti', 'zephyr', 'acorn', 'bell', 'cactus', 'dolphin',
    'echo', 'fountain', 'gemstone', 'hammock', 'ink', 'jasmine',
    'kettle', 'lighthouse', 'mosaic', 'ninja', 'octagon', 'panda',
    'quiver', 'raccoon', 'sundae', 'tulip', 'vortex', 'whisper'
];

// Get the theme from the post
const getTopTagsNLP = (inputString) => {
  // Define our themes and associated keywords
  const themes = {
    bullying: "bullying bully harass intimidate threaten mean victim abuse aggression aggressive hostile theft vandalism racial humiliation",
    recommendation: "recommendation recommend suggest advice opinion best option choice preference propose",
    generalQuestion: "what how why when where who question inquiry curious wonder",
    technology: "technology computer phone app software device hardware network internet digital electronic iPhone Android iOS",
    health: "health doctor symptom pain diet exercise wellness illness disease medication treatment",
    education: "school study learn teacher homework education academic class lesson course",
    homeworkHelp: "homeworkHelp homework assistance study support academic help tutoring",
    extracurricular: "extracurricular activities clubs participation hobbies interests",
    examPrep: "examPrep test preparation studying review assessments practice materials",
    help: "help peer assistance collaboration teamwork friendship community",
    mentalWellness: "mentalWellness mental health well-being stress management coping strategies",
    academicResources: "academic educational resources learning materials research tools library",
    teachers: "teachers teacher educators instructors mentors teaching professionals guidance",
    math: "math mathematics numeracy algebra geometry calculus statistics problem-solving",
    science: "science biology chemistry physics experimentation observation hypothesis",
    literature: "literature reading writing analysis textual interpretation authors",
    history: "history historical events cultural studies societal evolution timelines",
    art: "art creativity expression visual arts design techniques mediums",
    music: "music performance instruments composition auditory skills",
    physicalEducation: "physicalEducation physical education fitness sports activities teamwork health",
    foreignLanguages: "language acquisition vocabulary grammar communication fluency spanish french hindi mandarin chinese",
  };

  // Process the input
  const doc = nlp(inputString);
  
  // Remove stop words and punctuation, and get the remaining terms
  const terms = doc.terms().out('array');

  // Calculate scores for each theme
  const scores = {};
  Object.entries(themes).forEach(([theme, keywords]) => {
    const themeDoc = nlp(keywords);
    const themeTerms = themeDoc.terms().out('array');
    
    scores[theme] = terms.reduce((score, term) => {
      return score + (themeTerms.includes(term) ? 1 : 0);
    }, 0);
  });

  // Sort themes by score and get top 3
  const topTags = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .filter(([_, score]) => score > 0)
    .map(([theme, _]) => theme);

  return topTags;
};

// Helper functions
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// Generate a random alphanumeric username
function generateRandomUsername() {
	let username = '';
	
	// Select a random word from the word list
	const randomIndex = Math.floor(Math.random() * wordList.length);
	const randomWord = wordList[randomIndex];

	username = randomWord;
	username += Math.floor(1000 + Math.random() * 9000);
	
    return username; // Return the generated username
}

// Get or create username for email
function getUsernameForEmail(email) {
    const userMap = getFromLocalStorage(USER_MAP_KEY) || {};
    if (userMap[email]) {
        return userMap[email];
    }
    const newUsername = generateRandomUsername();
    userMap[email] = newUsername;
    saveToLocalStorage(USER_MAP_KEY, userMap);
    return newUsername;
}

// Page navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Check if the user is signed in
function checkSignedIn(page) {
    const isSignedIn = getFromLocalStorage(SIGNED_IN_KEY);
    if (!isSignedIn) {
        showPage('signin'); // Show the sign-in page if not signed in
    } else {
        showPage(page); // Otherwise, show the requested page
    }
}

// Authentication
function isSignedIn() {
    return getFromLocalStorage(SIGNED_IN_KEY) === true;
}

// Function to reset the sign-in form
function resetSignInForm() {
    document.getElementById('email').value = ''; // Clear email input
    document.getElementById('code').value = ''; // Clear verification code input if present
}

function signOut() {
    removeFromLocalStorage(SIGNED_IN_KEY);
    removeFromLocalStorage(VERIFICATION_KEY);
    resetSignInForm(); // Reset the form fields
    renderAuthLink();
    showPage('signin');
}

function toggleAuth() {
    if (isSignedIn()) {
        signOut(); // Sign out the user
    } else {
        showPage('signin'); // Show the sign-in page
    }
}

// Render the correct label (Sign In/Sign Out) based on authentication state
function renderAuthLink(username = '') {
    const authIcon = document.getElementById('auth-icon').querySelector('img');
    const usernametext = document.getElementById('username-text');
    const schoolImage = document.getElementById('school-image');
    
    if (isSignedIn()) {
        authIcon.src = 'images/logout.png';
        schoolImage.src = 'images/overlake.png';
        usernametext.textContent = 'Welcome '+ username;
    	//alert(`Signed in successfully as ${username}!`);
    } else {
        authIcon.src = 'images/login.png';
        schoolImage.src = 'images/blank.png';
        usernametext.textContent = 'Please log in';
    }
}

// Sign in logic (after verification)
function signIn(email) {
    saveToLocalStorage(SIGNED_IN_KEY, true); // Save sign-in status
    const username = getUsernameForEmail(email); // Get or create username
    const profile = { email, username };
    saveToLocalStorage(PROFILE_KEY, profile);
    renderAuthLink(username);
    renderPosts();
    showPage('home'); // Redirect to home after sign-in
}

// Check if the user is signed in when the app loads
function checkAuthOnLoad() {
    if (!isSignedIn()) {
        showPage('signin');
    } else {
        showPage('home');
    }
}

// Posts
function createPost(title, content, username) {
    const posts = getFromLocalStorage(POSTS_KEY) || [];
    const tags = getTopTagsNLP(content);
    const newPost = {
        id: uuid.v4(),
        title,
        content,
        username, // Associate post with username
        tags,
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: []
    };
    posts.unshift(newPost);
    saveToLocalStorage(POSTS_KEY, posts);
    populateTagContainer();
    renderPosts();    
    renderTagStatistics();
}

function renderPosts(selectedTag = '') {
	const posts = getFromLocalStorage(POSTS_KEY) || [];
	const container = document.getElementById('posts-container');
	
	// Filter posts by selected tag
    const filteredPosts = selectedTag ? 
        posts.filter(post => post.tags && post.tags.includes(selectedTag)) : 
        posts;
    
    // Sort posts in reverse chronological order
    filteredPosts.sort((a, b) => b.timestamp - a.timestamp);
    
	container.innerHTML = '';
	filteredPosts.forEach(post => {
		const postElement = document.createElement('div');
		postElement.className = 'bg-white rounded-lg shadow-md p-4 mb-4';
		postElement.innerHTML = `
			<h2 class="text-xl font-semibold mb-2">${post.title}</h2>
			<p class="text-gray-600 mb-4">${post.content}</p>
			<p class="text-sm text-blue-500">Posted by: ${post.username}</p> <!-- Display username -->
			<div class="flex justify-between items-center text-sm text-gray-500">
				<span>${new Date(post.timestamp).toLocaleString()}</span>
				<div>
					<button onclick="likePost('${post.id}')" class="mr-2">👍 ${post.likes}</button>
					<button onclick="toggleComments('${post.id}')" class="comment-count-${post.id}">💬 ${post.comments.length}</button>
				</div>
			</div>
			<div id="comments-${post.id}" class="comment-section hidden">
				<div class="comments-list-${post.id} comment-list mb-2"></div>
				<input type="text" id="comment-input-${post.id}" placeholder="Add a comment" class="input-field mr-2">
				<button onclick="addComment('${post.id}')" class="btn-primary text-sm mt-2">Add Comment</button>
			</div>
			<div class="tags mt-2">
				${post.tags && post.tags.length > 0 ? post.tags.map(tag => `<span class="tag bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-xs font-semibold mr-2">${tag}</span>`).join('') : ''}
			</div>
		`;
		
		container.appendChild(postElement);
		renderComments(post.id);
	});
}

// Populate the tag container
function populateTagContainer() {
    const posts = getFromLocalStorage(POSTS_KEY) || [];
    const tagContainer = document.getElementById('tag-container');
    
    // Clear existing tags
    tagContainer.innerHTML = ''; // Clear previous tags
    const tags = new Set();
    tags.add('All');

    // Collect unique tags from posts
    posts.forEach(post => {
        if (post.tags && post.tags.length > 0) {
            post.tags.forEach(tag => tags.add(tag));
        }
    });

    // Add unique tags to the tag container
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs font-semibold mr-2 cursor-pointer';
        tagElement.textContent = tag;
        if (tag === 'All') {
        	tagElement.onclick = () => filterPosts('');
        }
        else {
        	tagElement.onclick = () => filterPosts(tag);
        }
        
        tagContainer.appendChild(tagElement);
    });
}

// Function to filter posts based on selected tag
function filterPosts(tag) {
    renderPosts(tag);
}

function renderComments(postId) {
	const posts = getFromLocalStorage(POSTS_KEY) || [];
    const post = posts.find(p => p.id === postId);
    const commentsListElement = document.querySelector(`.comments-list-${postId}`);
    if (post && commentsListElement) {
        commentsListElement.innerHTML = post.comments.map(comment => `
            <p class="text-sm text-gray-600 mb-1"><strong>${comment.username}:</strong> ${comment.text}</p>
        `).join('');
    }
}

function toggleComments(postId) {
	const commentsContainer = document.getElementById(`comments-${postId}`);
	commentsContainer.classList.toggle('hidden');
}

function addComment(postId) {
	const commentInput = document.getElementById(`comment-input-${postId}`);
	const comment = commentInput.value.trim();
	if (comment) {
		const posts = getFromLocalStorage(POSTS_KEY) || [];
		const post = posts.find(p => p.id === postId);
		const currentUsername = getFromLocalStorage(PROFILE_KEY).username; // Get the current user's username
		if (post) {
			post.comments.push({ text: comment, username: currentUsername }); // Add username to the comment
			saveToLocalStorage(POSTS_KEY, posts);
			
			// Update the comments display
			renderComments(postId);
			
			// Update the comment count
			const commentCountElement = document.querySelector(`.comment-count-${postId}`);
			commentCountElement.textContent = `💬 ${post.comments.length}`;
			
			// Clear the input field
			commentInput.value = '';
			
			// Ensure the comment section remains open
			document.getElementById(`comments-${postId}`).classList.remove('hidden');
		}
	}
}
        
function likePost(postId) {
    const posts = getFromLocalStorage(POSTS_KEY) || [];
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        saveToLocalStorage(POSTS_KEY, posts);
        
        if (post.tags) {
        	renderPosts(post.tags[0]); // Nishant: This is a hack. Ideally, we should pass all the tags for this post and only the displayed posts should be rendered.
        }
        else {
        	renderPosts();
        }
    }
}

function showComments(postId) {
    const commentsContainer = document.getElementById(`comments-${postId}`);
    commentsContainer.classList.toggle('hidden');
    if (!commentsContainer.classList.contains('hidden')) {
        const posts = getFromLocalStorage(POSTS_KEY) || [];
        const post = posts.find(p => p.id === postId);
        if (post) {
            commentsContainer.innerHTML = `
                <div class="mb-2">
                    ${post.comments.map(comment => `<p class="text-sm text-gray-600 mb-1">${comment}</p>`).join('')}
                </div>
                <input type="text" id="comment-input-${postId}" placeholder="Add a comment" class="input-field mr-2">
                <button onclick="addComment('${postId}')" class="btn-primary text-sm">Add Comment</button>
            `;
        }
    }
}

// Event Listeners
document.getElementById('post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    
    /*
    // Send data to the Python backend
    const response = await fetch('http://127.0.0.1:5000/submit-post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.message); // You can handle the response as needed
        // Optionally store the post in local storage or render it directly
        createPost(title, content); // You can still keep this to add to local storage
    } else {
        console.error('Error processing post');
    }
	*/
	
	createPost(title, content, getFromLocalStorage(PROFILE_KEY).username);
    this.reset();
    showPage('home');
    
});

// Sign In
let verificationCode = '';

function sendVerificationCode(email) {
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit code
    alert(`Verification code sent to ${email}: ${verificationCode}`);
    saveToLocalStorage(VERIFICATION_KEY, verificationCode); // Store for verification
}

function verifyCode(inputCode) {
    const storedCode = getFromLocalStorage(VERIFICATION_KEY);
    return inputCode === storedCode;
}


document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const codeInput = document.getElementById('code').value;

    if (!codeInput) {
        // Send verification code if code input is empty
        sendVerificationCode(email);
    } else {
        // Verify code if provided
        if (verifyCode(codeInput)) {
            // On successful verification
    		signIn(email);
        } else {
            alert('Invalid verification code. Please try again.');
        }
    }
});

function getPostsByTag() {
    const posts = getFromLocalStorage(POSTS_KEY) || [];
    const tagCounts = {};

    // Count posts by tags
    posts.forEach(post => {
        post.tags.forEach(tag => {
            if (!tagCounts[tag]) {
                tagCounts[tag] = 0;
            }
            tagCounts[tag]++;
        });
    });

    return tagCounts;
}

function renderTagStatistics() {
    const tagCounts = getPostsByTag();
    const tags = Object.keys(tagCounts);
    const counts = Object.values(tagCounts);

    // Generate the chart
    const ctx = document.getElementById('tagsChart').getContext('2d');
    
    // Destroy the previous chart if it exists
    if (chartInstance) {
        chartInstance.destroy();
    }
    
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tags,
            datasets: [{
                label: '# of Posts',
                data: counts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
        	layout: {
				padding: {
					left: 30,
					right: 30,
					top: 30,
					bottom: 30
				}
			},
            onClick: function(evt, item) {
                if (item.length > 0) {
                    const tag = tags[item[0].index];
                    filterPosts(tag);
                    checkSignedIn('home');
                }
            },
            scales: {
                y: {
					beginAtZero: true,
					ticks: {
						stepSize: 1  // Ensure scale is in whole numbers
					},
					grid: {
						display: false  // Remove y-axis scale lines
					}
				},
				x: {
					grid: {
						display: false  // Remove x-axis scale lines
					}
				}
            }
        }
    });
}

// Initialize
populateTagContainer();
renderTagStatistics();
renderPosts();
checkAuthOnLoad();
if (getFromLocalStorage(PROFILE_KEY) != null) {
	renderAuthLink(getFromLocalStorage(PROFILE_KEY).username);
}
else {
	renderAuthLink();
}

// Initialize Default Posts if None Exist
function initializeDefaultPosts() {
	// clear old data
	localStorage.clear();
	
	// Iterate over defaultData and log the title and content
	defaultData.forEach(post => {
		createPost(post.Title, post.Content, 'alpha321')
	});
}

// Initialize Default Posts on First Load
document.addEventListener('DOMContentLoaded', function() {
    //initializeDefaultPosts(); // Set default posts if no posts exist
});
