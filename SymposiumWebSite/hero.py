import reflex as rx
from typing import List


class HeroState(rx.State):
    """State for managing hero image transitions."""
    
    current_image_index: int = 0
    images: List[str] = [
        "/home/Arana-Weed-Science-Researcher.jpg",
        "/home/Arana-Garlic.jpg"
    ]
    
    def next_image(self):
        """Switch to the next image."""
        self.current_image_index = (self.current_image_index + 1) % len(self.images)
    
    @rx.var
    def current_image(self) -> str:
        """Get the currently displayed image."""
        return self.images[self.current_image_index]


def hero_section() -> rx.Component:
    return rx.box(
        # Desktop Hero
        rx.desktop_only(
            rx.box(
                # Background image with overlay
                rx.box(
                    rx.image(
                        src=HeroState.current_image,
                        alt="Agricultural Research",
                        width="100%",
                        height="100vh",
                        object_fit="cover",
                        transition="all 2s ease-in-out",
                        position="absolute",
                        top="0",
                        left="0",
                        z_index="1",
                    ),
                    # Dark gradient overlay for better text readability
                    rx.box(
                        position="absolute",
                        top="0",
                        left="0",
                        width="100%",
                        height="100%",
                        background="linear-gradient(135deg, rgba(30, 58, 95, 0.85) 0%, rgba(197, 106, 51, 0.75) 50%, rgba(221, 185, 69, 0.85) 100%)",
                        z_index="2",
                    ),
                    position="relative",
                    width="100%",
                    height="100vh",
                    overflow="hidden",
                ),
                # Content overlay
                rx.box(
                    rx.vstack(
                        # Main content container
                        rx.vstack(
                            # Animated badge
                            rx.box(
                                rx.text(
                                    "FIRST ANNUAL",
                                    size="6",
                                    font_weight="600",
                                    text_align="center",
                                    color="rgba(255, 255, 255, 0.9)",
                                    letter_spacing="0.1em",
                                     text_shadow="1px 1px 3px rgba(0,0,0,0.6)",
                                ),
                                padding_y="0em",
                            ),
                            # Main title with staggered animation effect
                            rx.vstack(
                                rx.heading(
                                    "Symposium of Digital Agriculture",
                                    size="9",
                                    text_align="center",
                                    color="white",
                                    font_weight="900",
                                    line_height="1.1",
                                    text_shadow="2px 2px 4px rgba(0,0,0,0.4)",
                                ),
                                rx.box(
                                    rx.text(
                                        "(SyDAg)",
                                        size="6",
                                        text_align="center",
                                        color="rgba(255, 255, 255, 0.9)",
                                        font_weight="400",
                                        font_style="italic",
                                        padding_y="0.5em",
                                        text_shadow="1px 1px 3px rgba(0,0,0,0.4)",
                                    ),
                                    width="100%",
                                    display="flex",
                                    justify_content="center",
                                    margin_top="-1em",
                                ),
                                spacing="1",
                            ),
                            # Subtitle
                            rx.text(
                                "From Innovation to Impact",
                                size="7",
                                text_align="center",
                                font_style="italic",
                                color="rgba(255, 255, 255, 0.95)",
                                font_weight="400",
                                text_shadow="1px 1px 2px rgba(0,0,0,0.3)",
                            ),
                            # Call to action buttons
                            rx.hstack(
                                rx.link(
                                    rx.button(
                                        "Register Now",
                                        size="4",
                                        font_family="Geist",
                                        font_weight="700",
                                        background="linear-gradient(135deg, #ddb945 0%, #f4d03f 100%)",
                                        color="#2D1F15",
                                        border="none",
                                        box_shadow="0 8px 32px rgba(221, 185, 69, 0.4)",
                                        _hover={
                                            "transform": "translateY(-2px)",
                                            "box_shadow": "0 12px 40px rgba(221, 185, 69, 0.6)",
                                        },
                                        transition="all 0.3s ease",
                                        padding_x="2em",
                                    ),
                                    href="#register",
                                    is_external=False,
                                ),
                                rx.link(
                                    rx.button(
                                        "Learn More",
                                        size="4",
                                        font_family="Geist",
                                        font_weight="600",
                                        background="transparent",
                                        color="white",
                                        border="2px solid rgba(255, 255, 255, 0.3)",
                                        backdrop_filter="blur(10px)",
                                        _hover={
                                            "background": "rgba(255, 255, 255, 0.1)",
                                            "border_color": "rgba(255, 255, 255, 0.5)",
                                            "transform": "translateY(-2px)",
                                        },
                                        transition="all 0.3s ease",
                                        padding_x="2em",
                                    ),
                                    href="#about",
                                    is_external=False,
                                ),
                                spacing="4",
                            ),
                            spacing="4",
                            align_items="center",
                            max_width="900px",
                        ),
                        # Scroll indicator
                        rx.vstack(
                            rx.text(
                                "Scroll to explore",
                                size="1",
                                color="rgba(255, 255, 255, 0.7)",
                                font_weight="400",
                            ),
                            rx.box(
                                rx.icon(
                                    "chevron-down",
                                    color="rgba(255, 255, 255, 0.7)",
                                    size=20,
                                ),
                                animation="bounce 2s infinite",
                            ),
                            spacing="2",
                            align_items="center",
                        ),
                        spacing="8",
                        justify="center",
                        align_items="center",
                        height="100vh",
                        width="100%",
                        padding="2em",
                    ),
                    position="absolute",
                    top="0",
                    left="0",
                    width="100%",
                    height="100vh",
                    z_index="3",
                    display="flex",
                    align_items="center",
                    justify_content="center",
                ),
                position="relative",
                width="100%",
                height="100vh",
                overflow="hidden",
            )
        ),
        # Mobile Hero
        rx.mobile_only(
            rx.box(
                # Background image with overlay
                rx.box(
                    rx.image(
                        src=HeroState.current_image,
                        alt="Agricultural Research",
                        width="100%",
                        height="100vh",
                        object_fit="cover",
                        transition="all 2s ease-in-out",
                        position="absolute",
                        top="0",
                        left="0",
                        z_index="1",
                    ),
                    # Mobile gradient overlay
                    rx.box(
                        position="absolute",
                        top="0",
                        left="0",
                        width="100%",
                        height="100%",
                        background="linear-gradient(135deg, rgba(30, 58, 95, 0.9) 0%, rgba(197, 106, 51, 0.8) 50%, rgba(221, 185, 69, 0.9) 100%)",
                        z_index="2",
                    ),
                    position="relative",
                    width="100%",
                    height="100vh",
                    overflow="hidden",
                ),
                # Mobile content overlay
                rx.box(
                    rx.vstack(
                        rx.vstack(
                            # Mobile badge
                            rx.box(
                                rx.text(
                                    "FIRST ANNUAL",
                                    size="4",
                                    font_weight="600",
                                    text_align="center",
                                    color="rgba(255, 255, 255, 0.9)",
                                    letter_spacing="0.1em",
                                ),
                                background="rgba(221, 185, 69, 0.3)",
                                border="1px solid rgba(221, 185, 69, 0.6)",
                                border_radius="20px",
                                padding_x="1em",
                                padding_y="0.3em",
                                backdrop_filter="blur(10px)",
                                margin_bottom="0.7em",
                            ),
                            # Mobile title
                            rx.heading(
                                "Symposium of Digital Agriculture",
                                size="6",
                                text_align="center",
                                color="white",
                                font_weight="900",
                                line_height="1.2",
                                text_shadow="2px 2px 4px rgba(0,0,0,0.5)",
                            ),
                            rx.box(
                                rx.text(
                                    "(SyDAG)",
                                    size="4",
                                    text_align="center",
                                    color="rgba(255, 255, 255, 0.9)",
                                    font_weight="400",
                                    font_style="italic",
                                    text_shadow="1px 1px 3px rgba(0,0,0,0.4)",
                                ),
                                width="100%",
                                display="flex",
                                justify_content="center",
                                margin_top="-0.5em",
                            ),
                            # Mobile subtitle
                            rx.text(
                                "From Innovation to Impact",
                                size="4",
                                text_align="center",
                                font_style="italic",
                                color="rgba(255, 255, 255, 0.95)",
                                font_weight="400",
                                text_shadow="1px 1px 2px rgba(0,0,0,0.3)",
                            ),
                            # Mobile buttons
                            rx.vstack(
                                rx.link(
                                    rx.button(
                                        "Register Now",
                                        size="3",
                                        font_family="Geist",
                                        font_weight="700",
                                        background="linear-gradient(135deg, #ddb945 0%, #f4d03f 100%)",
                                        color="#2D1F15",
                                        border="none",
                                        box_shadow="0 6px 24px rgba(221, 185, 69, 0.4)",
                                        width="200px",
                                    ),
                                    href="#register",
                                    is_external=False,
                                ),
                                rx.link(
                                    rx.button(
                                        "Learn More",
                                        size="3",
                                        font_family="Geist",
                                        font_weight="600",
                                        background="transparent",
                                        color="white",
                                        border="2px solid rgba(255, 255, 255, 0.3)",
                                        backdrop_filter="blur(10px)",
                                        width="200px",
                                    ),
                                    href="#about",
                                    is_external=False,
                                ),
                                spacing="3",
                                align_items="center",
                            ),
                            spacing="3",
                            align_items="center",
                            max_width="350px",
                        ),
                        spacing="6",
                        justify="center",
                        align_items="center",
                        height="100vh",
                        width="100%",
                        padding="1.5em",
                    ),
                    position="absolute",
                    top="0",
                    left="0",
                    width="100%",
                    height="100vh",
                    z_index="3",
                    display="flex",
                    align_items="center",
                    justify_content="center",
                ),
                position="relative",
                width="100%",
                height="100vh",
                overflow="hidden",
            )
        ),
        # Enhanced CSS animations and image auto-advance
        rx.script("""
            // Add CSS animations only if not already added
            if (!document.getElementById('hero-styles')) {
                const heroStyles = document.createElement('style');
                heroStyles.id = 'hero-styles';
                heroStyles.textContent = `
                    @keyframes bounce {
                        0%, 20%, 53%, 80%, 100% {
                            transform: translate3d(0,0,0);
                        }
                        40%, 43% {
                            transform: translate3d(0,-8px,0);
                        }
                        70% {
                            transform: translate3d(0,-4px,0);
                        }
                        90% {
                            transform: translate3d(0,-2px,0);
                        }
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .hero-content > * {
                        animation: fadeInUp 1s ease-out forwards;
                    }
                    
                    .hero-content > *:nth-child(2) {
                        animation-delay: 0.2s;
                    }
                    
                    .hero-content > *:nth-child(3) {
                        animation-delay: 0.4s;
                    }
                    
                    .hero-content > *:nth-child(4) {
                        animation-delay: 0.6s;
                    }
                `;
                document.head.appendChild(heroStyles);
            }
            
            // Auto-advance images every 6 seconds (only set once)
            if (!window.heroImageInterval) {
                window.heroImageInterval = setInterval(function() {
                    fetch('/hero_state/next_image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }).catch(function(error) {
                        console.log('Image transition error:', error);
                    });
                }, 6000);
            }
        """),
        id="home",
        width="100%",
        class_name="hero",
        margin="0",
        padding="0",
        position="relative",
    )
