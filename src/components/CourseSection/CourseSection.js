"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ApplicationModalForm } from "../Dialogs/ApplicationModal";
import Link from "next/link";
export function CourseSection({ admissions, session }) {
  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Apply to our latest Course </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          admissions.map((admissions) => {
            return (
              <Card key={admissions._id}>
                <CardHeader>
                  <CardTitle>{admissions.course.title}</CardTitle>
                  <CardDescription>{admissions.batch.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{admissions.course.description}</p>
                </CardContent>
                <CardFooter>
                  <p>Apply for Course</p>
                </CardFooter>
              </Card>

            )
          })
        }
      </div>
    </section>
  );
}

export default CourseSection;
