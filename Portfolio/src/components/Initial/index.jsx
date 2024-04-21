import { About } from "../About";
import { Contacts } from "../Contacts";
import { Footer } from "../Footer";
import { Home } from "../Home";
import { Menu } from "../Menu";
import { Projects } from "../Projects";
import { Skills } from "../Skills";
export const Initial = () => {
    return(
        <main>
            <div>
                <Menu />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contacts />
                <Footer />
            </div>
        </main>
        
    )
}