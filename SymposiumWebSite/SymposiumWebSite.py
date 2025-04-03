import reflex as rx
from reflex_motion import motion

from rxconfig import config
from SymposiumWebSite.about import about_section
from SymposiumWebSite.contact import contact_section
from SymposiumWebSite.hero import hero_section
from SymposiumWebSite.nav import footer, header
from SymposiumWebSite.register import register_section
from SymposiumWebSite.schedule import schedule_section
from SymposiumWebSite.speakers import speakers_section


class State(rx.State):
    """The app state."""

    pass


def apply_motion(content: rx.Component) -> rx.Component:
    """Wrap the given content in a reflex-motion component for a subtle fade & float-in effect."""
    return motion(
        content,
        initial={"opacity": 0, "y": 70},
        while_in_view={"opacity": 1, "y": 0},
        transition={"duration": 1.0, "ease": "easeOut"},
        # once=True,  # only animate the first time they enter the viewport
    )


def index() -> rx.Component:
    section_components = [
        hero_section,
        about_section,
        register_section,
        speakers_section,
        schedule_section,
        contact_section,
    ]
    motion_sections = [
        apply_motion(
            rx.box(
                section_func(),
                overflow_x="hidden",
                width="100%",
                padding_x="2em",
            )
        )
        for section_func in section_components
    ]

    return rx.box(
        rx.script("document.documentElement.style.scrollBehavior = 'smooth'"),
        # Fixed navbar
        rx.box(
            header(),
            position="sticky",
            top="0",
            z_index="1000",
            width="100%",
        ),
        # Unpack all the motion sections
        *motion_sections,
        footer(),
        width="100%",
        spacing="0",
    )


app = rx.App()
app.add_page(index)
