<!-- ======= TEMPLATE ======= -->
<template>
	<custom-header title="Courses"></custom-header>
	<div class="parent">
		<div v-for="(course, index) in courses" v-bind:key="index" >
			<card class= "mt-4" :image="course.image" >
				<template #title>
					{{course.title}}
				</template>
				<template #body>
					{{course.description}}
				</template>
				<template #end>
					<div class="d-grid gap-2 d-md-flex justify-content-md-right">
						<button class="btn btn-success" @click="viewCourse(course)"> View Course </button>
					</div>
				</template>
			</card>
		</div>
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'

export default {
	components:
	{
		CustomHeader,
		Card
	},
	methods: {
		viewCourse: function(course) {
			this.$router.push({ path: 'MyCourses', query: course})			
		}
	}, 
	setup() {
		const courses = [
			{
				title: 'Cyber Security',
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/Cyber-Security.jpg',
					alt: 'Cyber Security',
				},
				home:"Become an industry-ready professional with Advanced Executive Program in Cybersecurity and transform your career in 6 months. This course provides a high-engagement learning experience with real-world applications and is designed for individuals who want to start a new, more fulfilling career.",
				announcements:"The Cyber Security Expert Master’s Program will equip you with the skills needed to become an expert in this rapidly growing domain. You will learn comprehensive approaches to protecting your infrastructure, including securing data and information, running risk analysis and mitigation, architecting cloud-based security, achieving compliance and much more with this best-in-class program.",
				course:"This list is not a ranking, but rather cyber security schools are listed alphabetically. Remember, there is no ultimate “best cybersecurity boot camp” – the best cyber program for you depends on your own learning style, career goals, availability, etc. No matter how many accolades a school has, make sure you do your research: read reviews, talk to alumni, take an intro course, and ask about job outcomes data.",
				quizzes:"Cyber quize data",
				syllabus:"A syllabus specification is a document that communicates information about a specific academic course or class and defines expectations and responsibilities. It is generally an overview or summary of the curriculum. A syllabus may be set out by an examination board or prepared by the tutor or instructor who teaches or controls the course. The word is also used more generally for an abstract or programme of knowledge, and is best known in this sense as referring to two catalogues of doctrinal positions condemned by the Catholic Church in 1864 and 1907.[3]",
				forum:"A website that provides an online exchange of information between people about a particular topic. It provides a venue for questions and answers and may be monitored to keep the content appropriate. Also called a  an Internet forum is similar to an Internet newsgroup (see below), but uses the Web browser for access. Before the Web, text-only forums were common on bulletin boards and proprietary online services. However, Internet forums include all the extras people expect from the Web, including images, videos, downloads and links, sometimes functioning as a mini-portal on the topic.Forums can be entirely anonymous or require registration with username and password.",					
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapterDetail1:"DXC Security services help you assess risk and proactively address all facets of your security environment, from threat intelligence to compliance.",	
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapterDetail2:"We leverage proven methodologies, intelligent automation and industry-leading partners to tailor security solutions to your unique business needs.",	
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapterDetail3:"Security is foundational to DXC. We weave cyber resilience into your IT security, operations and culture. ",	
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapterDetail4:"Whether you need help migrating to the cloud, protecting data with a Zero Trust strategy or managing your security operations center, we handle security so you can focus on your business",	
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				chapterDetail5:"Our global network of security operations centers provides 24x7 management, monitoring and incident response for the world's largest companies.",	
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",				
			},
			{
				title: 'Data Science',
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/data_science.jpg',
					alt: 'Data Science',
				},
				home:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data,[1][2] and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.",
				announcements:"Data science is an interdisciplinary field focused on extracting knowledge from data sets, which are typically large (see big data), and applying the knowledge and actionable insights from data to solve problems in a wide range of application domains.[8] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics,",
				course:"Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[14] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[15] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data ",
				quizzes:"Data science quize data",
				syllabus:"The term  has been traced back to 1974, when Peter Naur proposed it as an alternative name for computer science.[22] In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.[22] However, the definition was still in flux. After the 1985 lecture in the Chinese Academy of Sciences in Beijing, in 1997 C.F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting, or limited to describing data.[23] In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.[21]",
				forum:"The professional title of has been attributed to DJ Patil and Jeff Hammerbacher in 2008.[27] Though it was used by the National Science Board in their 2005 report,  it referred broadly to any key role in managing a digital data collection.[28] ",	
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapterDetail1:"DXC Security services help you assess risk and proactively address all facets of your security environment, from threat intelligence to compliance.",	
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapterDetail2:"We leverage proven methodologies, intelligent automation and industry-leading partners to tailor security solutions to your unique business needs.",	
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapterDetail3:"Security is foundational to DXC. We weave cyber resilience into your IT security, operations and culture. ",	
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapterDetail4:"Whether you need help migrating to the cloud, protecting data with a Zero Trust strategy or managing your security operations center, we handle security so you can focus on your business",	
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				chapterDetail5:"Our global network of security operations centers provides 24x7 management, monitoring and incident response for the world's largest companies.",
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",
				
			},
			{
				title: 'Big Data',
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/big_data.jpeg',
					alt: 'Big Data',
				},
				home:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data,[1][2] and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.",
				announcements:"Data science is an interdisciplinary field focused on extracting knowledge from data sets, which are typically large (see big data), and applying the knowledge and actionable insights from data to solve problems in a wide range of application domains.[8] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics,",
				course:"Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[14] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[15] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data ",
				quizzes:"Data science quize data",
				syllabus:"The term  has been traced back to 1974, when Peter Naur proposed it as an alternative name for computer science.[22] In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.[22] However, the definition was still in flux. After the 1985 lecture in the Chinese Academy of Sciences in Beijing, in 1997 C.F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting, or limited to describing data.[23] In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.[21]",
				forum:"The professional title of has been attributed to DJ Patil and Jeff Hammerbacher in 2008.[27] Though it was used by the National Science Board in their 2005 report,  it referred broadly to any key role in managing a digital data collection.[28] ",	
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapterDetail1:"DXC Security services help you assess risk and proactively address all facets of your security environment, from threat intelligence to compliance.",	
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapterDetail2:"We leverage proven methodologies, intelligent automation and industry-leading partners to tailor security solutions to your unique business needs.",	
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapterDetail3:"Security is foundational to DXC. We weave cyber resilience into your IT security, operations and culture. ",	
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapterDetail4:"Whether you need help migrating to the cloud, protecting data with a Zero Trust strategy or managing your security operations center, we handle security so you can focus on your business",	
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				chapterDetail5:"Our global network of security operations centers provides 24x7 management, monitoring and incident response for the world's largest companies.",
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",
				
			},
			{
				title: 'Machine Learning and AI',
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/ml-ai.jpg',
					alt: 'Data Science',
				},
				home:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data,[1][2] and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.",
				announcements:"Data science is an interdisciplinary field focused on extracting knowledge from data sets, which are typically large (see big data), and applying the knowledge and actionable insights from data to solve problems in a wide range of application domains.[8] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics,",
				course:"Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[14] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[15] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data ",
				quizzes:"Data science quize data",
				syllabus:"The term  has been traced back to 1974, when Peter Naur proposed it as an alternative name for computer science.[22] In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.[22] However, the definition was still in flux. After the 1985 lecture in the Chinese Academy of Sciences in Beijing, in 1997 C.F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting, or limited to describing data.[23] In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.[21]",
				forum:"The professional title of has been attributed to DJ Patil and Jeff Hammerbacher in 2008.[27] Though it was used by the National Science Board in their 2005 report,  it referred broadly to any key role in managing a digital data collection.[28] ",	
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapterDetail1:"DXC Security services help you assess risk and proactively address all facets of your security environment, from threat intelligence to compliance.",	
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapterDetail2:"We leverage proven methodologies, intelligent automation and industry-leading partners to tailor security solutions to your unique business needs.",	
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapterDetail3:"Security is foundational to DXC. We weave cyber resilience into your IT security, operations and culture. ",	
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapterDetail4:"Whether you need help migrating to the cloud, protecting data with a Zero Trust strategy or managing your security operations center, we handle security so you can focus on your business",	
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				chapterDetail5:"Our global network of security operations centers provides 24x7 management, monitoring and incident response for the world's largest companies.",
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",
				
			},
			{
				title: 'Web Development',
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/webdev.jpg',
					alt: 'Big Data',
				},
				home:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data,[1][2] and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.",
				announcements:"Data science is an interdisciplinary field focused on extracting knowledge from data sets, which are typically large (see big data), and applying the knowledge and actionable insights from data to solve problems in a wide range of application domains.[8] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics,",
				course:"Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[14] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[15] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data ",
				quizzes:"Data science quize data",
				syllabus:"The term  has been traced back to 1974, when Peter Naur proposed it as an alternative name for computer science.[22] In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.[22] However, the definition was still in flux. After the 1985 lecture in the Chinese Academy of Sciences in Beijing, in 1997 C.F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting, or limited to describing data.[23] In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.[21]",
				forum:"The professional title of has been attributed to DJ Patil and Jeff Hammerbacher in 2008.[27] Though it was used by the National Science Board in their 2005 report,  it referred broadly to any key role in managing a digital data collection.[28] ",		
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",
			},
			{
				title: "Metaverse",
				description: 'Complete the video course and complete the quiz exercises. Good luck!',
				image: {
					src: 'img/Courses/Metaverse.jpg',
					alt: 'Metaverse',
				},
				home:"Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data,[1][2] and apply knowledge and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.",
				announcements:"Data science is an interdisciplinary field focused on extracting knowledge from data sets, which are typically large (see big data), and applying the knowledge and actionable insights from data to solve problems in a wide range of application domains.[8] The field encompasses preparing data for analysis, formulating data science problems, analyzing data, developing data-driven solutions, and presenting findings to inform high-level decisions in a broad range of application domains. As such, it incorporates skills from computer science, statistics,",
				course:"Many statisticians, including Nate Silver, have argued that data science is not a new field, but rather another name for statistics.[14] Others argue that data science is distinct from statistics because it focuses on problems and techniques unique to digital data.[15] Vasant Dhar writes that statistics emphasizes quantitative data and description. In contrast, data science deals with quantitative and qualitative data ",
				quizzes:"Data science quize data",
				syllabus:"The term  has been traced back to 1974, when Peter Naur proposed it as an alternative name for computer science.[22] In 1996, the International Federation of Classification Societies became the first conference to specifically feature data science as a topic.[22] However, the definition was still in flux. After the 1985 lecture in the Chinese Academy of Sciences in Beijing, in 1997 C.F. Jeff Wu again suggested that statistics should be renamed data science. He reasoned that a new name would help statistics shed inaccurate stereotypes, such as being synonymous with accounting, or limited to describing data.[23] In 1998, Hayashi Chikio argued for data science as a new, interdisciplinary concept, with three aspects: data design, collection, and analysis.[21]",
				forum:"The professional title of has been attributed to DJ Patil and Jeff Hammerbacher in 2008.[27] Though it was used by the National Science Board in their 2005 report,  it referred broadly to any key role in managing a digital data collection.[28] ",	
				chapterDetail:"Meta Verse",	
				chapter1:"https://www.youtube.com/embed/i9o70PMqMGY",
				chapter2:"https://www.youtube.com/embed/_uQrJ0TkZlc",
				chapter3:"https://www.youtube.com/embed/xoL6WvCARJY",
				chapter4:"https://www.youtube.com/embed/8cm1x4bC610",
				chapter5:"https://www.youtube.com/embed/vJEO57B05Sg",
				question1:"1. Grand Central Terminal, Park Avenue, New York is the world's.",
				question2:"2. Entomology is the science that studies",
				question3:"3. Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
				question4:"4. Garampani sanctuary is located at",
				question5:"5. For which of the following disciplines is Nobel Prize awarded?",
			}
		]
		return {
			courses
		}
	}
	
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.card {
	width: 34rem;
}

.parent {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	flex: 1;
}

</style>
