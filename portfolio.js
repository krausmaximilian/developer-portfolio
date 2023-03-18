import emoji from "react-easy-emoji";

export const greetings = {
	name: "Maximilian Kraus",
	title: "Maximilian Kraus",
	description:
		"I'm a versatile software & ML engineer with expertise in backend development, machine learning, cloud infrastructure, and data pipelines. I consistently deliver high-quality solutions with a combination of technical expertise, creative problem-solving, and excellent collaboration skills.",
	resumeLink:
		"https://max-kraus-public-bucket.s3.eu-central-1.amazonaws.com/documents/cv.pdf",
};

export const openSource = {
	githubUserName: "krausmaximilian",
};

export const contact = {};

export const socialLinks = {
	url: "https://maximilian-kraus.de",
	linkedin: "https://www.linkedin.com/in/maximilian-kraus1994/",
	github: "https://github.com/krausmaximilian/",
};

export const skillsSection = {
	title: "What I do",
	subTitle: "",
	data: [
		{
			title: "Backend Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
			    "Highly skilled in Python. Created and maintained RESTful APIs in Django & Django REST, as well as web applications such as www.airteam.cloud. Experienced in containerization with Docker.",
			],
			softwareSkills: [
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "logos:django",
				},
				{
					skillName: "Django Rest",
					fontAwesomeClassname: "skill-icons:django",
				},
				{
					skillName: "Sendgrid",
					fontAwesomeClassname: "logos:sendgrid",
				},
				{
					skillName: "Celery",
					fontAwesomeClassname: "simple-icons:celery",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker",
				},
				{
					skillName: "PyCharm",
					fontAwesomeClassname: "logos:pycharm",
				},
				{
					skillName: "C#",
					fontAwesomeClassname: "logos:c-sharp",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "vscode-icons:file-type-nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
								{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Gitlab",
					fontAwesomeClassname: "logos:gitlab",
				},
				{
					skillName: "Jira",
					fontAwesomeClassname: "logos:jira",
				},
				{
					skillName: "Grasshopper",
					fontAwesomeClassname: "noto:grasshopper",
				},
				{
					skillName: "Linux",
					fontAwesomeClassname: "skill-icons:linux-dark",
				},
				{
                    skillName: "Kanban",
                    fontAwesomeClassname: "material-symbols:view-kanban-outline-rounded"
                },
			],
		},
		{
			title: "Cloud Infrastructure",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
			    "Experienced in working on multiple cloud platforms with infrastructure as code and via UI. Built CI/CD pipelines with custom gitlab runners for automatic testing & deployment. Managed various web applications on AWS and GCP. Built ETL pipelines with Apache Beam running with DataFlow."
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
	            {
					skillName: "GCP",
					fontAwesomeClassname: "logos:google-cloud",
				},
				{
					skillName: "S3",
					fontAwesomeClassname: "logos:aws-s3",
				},
				{
					skillName: "EC2",
					fontAwesomeClassname: "logos:aws-ec2",
				},
				{
					skillName: "Load Balancing",
					fontAwesomeClassname: "carbon:load-balancer-application",
				},
				{
					skillName: "Big Query",
					fontAwesomeClassname: "tabler:brand-google-big-query",
				},
				{
					skillName: "PubSub",
					fontAwesomeClassname: "carbon:message-queue",
				},
				{
					skillName: "Beam",
					fontAwesomeClassname: "logos:apache",
				},
				{
					skillName: "Spark",
					fontAwesomeClassname: "cib:apache-spark",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Gitlab CI CD",
					fontAwesomeClassname: "logos:gitlab",
				},
				{
					skillName: "Grafana",
					fontAwesomeClassname: "logos:grafana",
				},
				{
					skillName: "Terraform",
					fontAwesomeClassname: "logos:terraform-icon",
				},
			],
		},
		{
			title: "Machine Learning",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
					"Experienced in different deep learning fields such as Object Detection & Tracking, Image & Pointcloud segmentation, as well as general classification problems. Skilled in setting up and using MlFlow for ML Lifecycle & experiment management, and model serving.",
			],
			softwareSkills: [
				{
					skillName: "PyTorch",
					fontAwesomeClassname: "logos:pytorch-icon",
				},
				{
					skillName: "MlFlow",
					fontAwesomeClassname: "simple-icons:mlflow",
				},
				{
					skillName: "Tensorboard",
					fontAwesomeClassname: "uil:meeting-board",
				},
				{
					skillName: "Tracking",
					fontAwesomeClassname: "fluent:eye-tracking-24-regular",
				},
				{
					skillName: "Pointclouds",
					fontAwesomeClassname: "icon-park-outline:six-points",
				},
				{
					skillName: "Images",
					fontAwesomeClassname: "ic:baseline-image-search",
				},
				{
					skillName: "Object Detection",
					fontAwesomeClassname: "fluent:scan-object-24-filled",
				}
			],
		},
	],
};

// export const SkillBars = [
//	{
//		Stack: "Machine Learning", //Insert stack or technology you have experience in
//		progressPercentage: "90", //Insert relative proficiency in percentage
//	},
//	{
//		Stack: "Backend Development",
//		progressPercentage: "70",
//	},
//	{
//		Stack: "Deep Learning",
//		progressPercentage: "60",
//	},
//	{
//		Stack: "Programming",
//		progressPercentage: "60",
//	},
//];

export const educationInfo = [
	{
		schoolName: "Technical University of Munich",
		subHeader: "Master of Science in Robotics, Cognition, Intelligence",
		duration: "October 2017 - May 2020",
		desc: "Research in deep learning based multi-object tracking",
		grade: "Grade 1.9",
		descBullets: [
			'Thesis: "Multi-Object Tracking in Aerial and Satellite Imagery" (1.0)',
			'ICPR Conference Paper: "AerialMPTNet: Multi-Pedestrian Tracking in Aerial Imagery Using Temporal and Graphical Features"',
		],
	},
	{
		schoolName: "Ludwig Maximilian University of Munich",
		subHeader: "Bachelor of Science in Media Informatics",
		duration: "October 2013 - May 2016",
		grade: "Grade 1.8",
		descBullets: [
			'Thesis: "Development and Evaluation of a Dead Reckoning Solution for Indoor Positioning with Particle Filter and iBeacons" (1.0)',
			'IPIN Conference Paper: "Robust pedestrian dead reckoning using anchor point recalibration"',
		],
	},
];

export const experience = [
	{
		role: "Machine Learning Engineer",
		company: "Aerial Intelligence GmbH",
		companylogo: "/img/icons/common/airteam.png",
		date: "Jan 2021 – today",
		desc: "Experienced Software & ML Engineer at Airteam responsible for Machine Learning & Backend Tasks. Implemented deep learning models for point cloud and mesh segmentation to simplify complex 3D models into simplified, non-primitive forms. Automatized and streamlined complex 3d model creation with photogrammetry, resulting in 95 % reduced human work hours. Skilled in developing web applications using Python, Django, Django Rest and FastAPI (e.g. www.airteam.cloud), and utilizing Gitlab CI/CD with Docker. Developed and managed cloud infrastructure environments on AWS and GCP with Infrastructure as Code. Built Data Pipelines with Apache Beam, PubSub and BigQuery. Proficient in tools such as AWS, GCP, Terraform, PyTorch, Rhino, Jira, PostgreSql, Celery, Grafana, Sentry, Nginx and more."
	},
	{
		role: "Machine Learning Intern",
		company: "Deutsche Bahn AG",
		companylogo: "/img/icons/common/db.png",
		date: "Sep 2020 – Jan 2021",
		desc: "Developed parts of a camera-based damage diagnosis system for cargo trains. Performed data analysis of train and damage data, integrating an object segmentation pipeline to detect different cargo train objects in object detector cutouts. Created multiple datasets in different formats, implemented a GAN for anomaly detection, and used the AWS CLI to manage data in S3. Additionally, created and hosted a Sphinx documentation to ensure effective project management.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
];

export const projects = [
	{
		name: "Pointcloud Models",
		desc: "Easily train and use different deep learning based point cloud models with predefined training routines and selectable loss functions and metrics. Tracking and logging to MlFlow is supported by default.",
		github: "https://github.com/krausmaximilian/pointcloud-models",
	},
	{
		name: "Point clustering with Roofs",
		desc: "Clustering point clouds into multiple surfaces while showcasing edges and corners in one cluster.",
		github: "https://github.com/krausmaximilian/roof_detection",
	},
	{
		name: "Optimized Data Transfer",
		desc: "Streamlining the daily transfer of millions of files through robust Apache Spark data pipelines. Using Terraform to spin up the necessary resources",
		github: "todo",
	},
	{
		name: "Python Default Project",
		desc: "A small project that is useful when starting a new python project.",
		github: "https://github.com/krausmaximilian/python-default-project",
	},
	{
		name: "AerialMPTNet: Multi-Pedestrian Tracking in Aerial Imagery Using Temporal and Graphical Features",
		desc: "We describe a new approach for multi-pedestrian tracking in geo-referenced aerial imagery called AerialMPTNet, which fuses appearance features, movement predictions, and pedestrian interconnections. We also introduce the Aerial Multi-Pedestrian Tracking (AerialMPT) dataset, which we believe to be the largest and most diverse dataset to date, and evaluate AerialMPTNet on AerialMPT and KIT AIS, showing significant improvement over other methods in accuracy and time-efficiency.",
		link: "https://arxiv.org/abs/2006.15457",
	},
	{
		name: "Identity Recognition in Intelligent Cars with Behavioral Data and LSTM-ResNet Classifier",
		desc: "We present a solution for improving identity recognition in a car cabin using Time Series Classification (TSC) and deep neural networks. The input data, gas and brake pedal pressure, is easily collected during driving and the combination of LSTM and ResNet classifiers leads to an accuracy of 79.49% on a 10-drivers subset of NUDrive and 96.90% on a 5-drivers subset of UTDrive, outperforming other models by a large margin.",
		link: "https://arxiv.org/abs/2003.00770",
	},
];

export const feedbacks = [
	{
		name: "Dr. Rachel A. Hegemann",
		feedback:
            "I worked with Max in the context of a large image processing project at the Deutsche Bahn. In the project we were investigating the quality of various state-of-the-Art anomaly detection algorithms for a fixed camera system problem. While working with Max I found him to be a very knowledgeable, curious and hard working. He was able to explain his work and process very clear both verbally and in written form. His work process was very clean and structured. On a personal level, it was a pleasure to work with Max as he quickly integrated into our team and made sizable contributions. I would highly recommend Max as a developer and believe he would also excell as a lead. He would be an asset to any team."
    },
    {
		name: "Dr. Reza Bahmanyar",
		feedback:
			"For about six months, Max worked on his Master's thesis in our team. His work ethic and time management skills impressed me as his supervisor. He always went above and beyond what we expected to achieve. He was always willing to put in the time and effort to do the research and find professional and scientific answers to the open questions during his research. Any team would be lucky to have Max on board and I would be delighted to recommend him to any company in need of new talent.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Maximilian Kraus",
	description:
		"Experience Machine Learning & Software Developer",
	author: "Maximilian Kraus",
	image: "",
	url: "www.maximilian-kraus.de",
	keywords: [
		"Maximilian",
		"Maximilian Kraus",
		"@krausmaximilian",
		"krausmaximilian",
		"@krausmax",
		"krausmax",
		"Portfolio",
		"Kraus Portfolio",
		"Maximilian Kraus Portfolio",
		"cloud",
		"infrastructure",
		"backend",
		"machine learning",
		"deep learning",
		"ai",
		"artificial intelligence",
		"aws",
		"infrastructure as code"
	],
}
