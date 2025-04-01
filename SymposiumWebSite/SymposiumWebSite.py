import reflex as rx

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


# Animation state for sections


class SectionState(rx.State):
    # Track if each section is in view
    section_in_view: dict = {}

    def set_section_visible(self, section_id: str):
        """Set a section as visible in the viewport."""
        self.section_in_view[section_id] = True


# Reflex's built-in animations
def animated_section(component, section_id):
    return rx.box(
        component,
        id=section_id,
        on_scroll=SectionState.set_section_visible(section_id),
        animation="fade-in",
        animation_duration="1s",
        tag="Section",
        class_name=section_id,
        scroll_margin_top="5em",
    )


def index() -> rx.Component:
    # Single-page scrolling layout with animations
    return rx.box(
        # Add scroll behavior
        rx.script("document.documentElement.style.scrollBehavior = 'smooth'"),
        # Fixed navbar
        rx.box(
            header(),
            position="sticky",
            top="0",
            z_index="1000",
            width="100%",
        ),
        # Main content sections
        rx.box(
            animated_section(hero_section(), "hero"),
            animated_section(register_section(), "register"),
            animated_section(about_section(), "about"),
            animated_section(speakers_section(), "speakers"),
            animated_section(schedule_section(), "schedule"),
            animated_section(contact_section(), "contact"),
            footer(),
            overflow_x="hidden",
            width="100%",
        ),
        width="100%",
        spacing="0",
    )


app = rx.App()
app.add_page(index)
