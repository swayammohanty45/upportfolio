from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional

router = APIRouter()

class Project(BaseModel):
    id: int
    title: str
    description: str
    highlights: List[str]
    tech_stack: List[str]
    category: str
    featured: bool
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    ai_powered: bool = False

PROJECTS: List[Project] = [
    Project(
        id=1,
        title="Event Management Web Application",
        description="Full-stack event booking platform built with Django REST Framework and React, with secure JWT authentication and a complete booking workflow.",
        highlights=[
            "Secure JWT-based login and signup with role-based access for users and admins",
            "Complete event CRUD — create, edit, publish, and delete events",
            "Interactive seat-selection and booking with real-time seat status and QR-code tickets",
            "Online payment and verification flow (UPI/UTR), wishlist, and admin dashboard",
        ],
        tech_stack=["Django REST", "React", "PostgreSQL", "JWT"],
        category="Full-Stack",
        featured=True,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
    Project(
        id=2,
        title="Learning Management System",
        description="Learning Management System built with Django, with role-based access for Admin, Instructor, and Student.",
        highlights=[
            "Role-based access for Admin, Instructor, and Student",
            "Course and lesson management including video lessons",
            "Online quizzes with automatic scoring",
            "Student enrollment, progress tracking, and auto-generated certificates",
            "Responsive UI (HTML/CSS/JS) with a course feedback system on a SQL backend",
        ],
        tech_stack=["Django", "Python", "SQL", "HTML/CSS", "JavaScript"],
        category="Full-Stack",
        featured=True,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
    Project(
        id=3,
        title="Employee Management System",
        description="Employee Management System built with PHP and MySQL, with secure admin authentication and full record management.",
        highlights=[
            "Secure admin login and authentication",
            "Full CRUD operations for employee and department records",
            "Attendance tracking and role/designation management with search and filtering",
            "Responsive admin dashboard built with HTML, CSS, and Bootstrap",
        ],
        tech_stack=["PHP", "MySQL", "Bootstrap", "HTML/CSS"],
        category="Full-Stack",
        featured=False,
        ai_powered=False,
        github_url="https://github.com/swayammohanty45?tab=repositories",
    ),
]

@router.get("/", response_model=List[Project])
def get_all_projects():
    return PROJECTS

@router.get("/featured", response_model=List[Project])
def get_featured_projects():
    return [p for p in PROJECTS if p.featured]

@router.get("/{project_id}", response_model=Project)
def get_project(project_id: int):
    for p in PROJECTS:
        if p.id == project_id:
            return p
    raise HTTPException(status_code=404, detail="Project not found")
