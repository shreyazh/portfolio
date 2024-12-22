import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from 'lucide-react'
import { EducationItem } from '@/types/education'
import { educationData } from '@/data/education'

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        Education
      </h1>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{edu.institution}</CardTitle>
              <CardDescription className="text-lg">{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <p className="text-sm">{edu.date}</p>
              </div>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}