import { Suspense } from "react";
import CoursePageInner from "./CoursePageInner";

export default function CoursePage() {
    return (
        <Suspense fallback={<div>로딩 중...</div>}>
            <CoursePageInner />
        </Suspense>
    );
}
