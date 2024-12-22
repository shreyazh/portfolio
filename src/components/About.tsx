import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
            alt="Profile" 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">John Doe</h2>
            <p className="text-gray-600 mb-6">
              Full Stack Developer with 5+ years of experience in building scalable web applications.
              Passionate about clean code, user experience, and continuous learning.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900">Master of Computer Science</h4>
                <p className="text-gray-600">University of Technology, 2018-2020</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Bachelor of Computer Science</h4>
                <p className="text-gray-600">State University, 2014-2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;