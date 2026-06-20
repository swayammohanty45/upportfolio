from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class Skill(BaseModel):
    name: str
    category: str
    level: int        # 1-100

SKILLS: List[Skill] = [
    Skill(name="Python",               category="Programming", level=90),
    Skill(name="Java",                 category="Programming", level=75),
    Skill(name="Django",               category="Web",         level=85),
    Skill(name="PHP",                  category="Web",         level=78),
    Skill(name="JavaScript",           category="Web",         level=80),
    Skill(name="HTML/CSS",             category="Web",         level=88),
    Skill(name="Bootstrap",            category="Web",         level=85),
    Skill(name="MySQL",                category="Database",    level=82),
    Skill(name="Software Engineering", category="Core",        level=80),
    Skill(name="Git",                  category="Tools",       level=80),
    Skill(name="VS Code",              category="Tools",       level=85),
]

@router.get("/", response_model=List[Skill])
def get_all_skills():
    return SKILLS

@router.get("/categories")
def get_skill_categories():
    categories = list(set(s.category for s in SKILLS))
    return {"categories": sorted(categories)}
