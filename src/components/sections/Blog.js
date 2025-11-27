// src/components/sections/Blog.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 6rem 0;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 85%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const BlogHeading = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const ArticleCard = styled.article`
  padding: 2.5rem 2rem;
  border-radius: 18px;
  border: 1px solid rgba(${(props) => props.theme.textRgba}, 0.1);
  background: linear-gradient(
      135deg,
      rgba(${(props) => props.theme.textRgba}, 0.03),
      rgba(${(props) => props.theme.textRgba}, 0.01)
    ),
    ${(props) => props.theme.body};
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);

  @media (max-width: 48em) {
    padding: 1.8rem 1.4rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontlg};
    margin: 0 0 0.5rem 0;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Meta = styled.p`
  margin: 0 0 1.8rem 0;
  font-size: ${(props) => props.theme.fontxs};
  color: rgba(${(props) => props.theme.textRgba}, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

const Body = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.7;
  color: rgba(${(props) => props.theme.textRgba}, 0.9);

  p {
    margin: 0 0 1.2rem 0;
  }

  h4 {
    margin: 2.2rem 0 0.75rem 0;
    font-size: ${(props) => props.theme.fontmd};
    text-transform: none;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

// You can add more <ArticleCard> blocks later for more posts.
const Blog = () => {
  return (
    <Section id="blog">
      <Container>
        <BlogHeading>From the Function in Motion Journal</BlogHeading>

        <ArticleCard>
          <h3>
            The Relentless Pursuit of Function: Why One DPT Walked Away From the
            System to Actually Fix People
          </h3>
          <Meta>By Robert Briana • Bronx, NY</Meta>

          <Body>
            <p>American healthcare breaks you quietly long before it bankrupts you.</p>

            <p>
              Everyone talks about the huge hospital bills, the copays, the
              deductibles that feel like a second rent. What almost nobody talks
              about is the slower failure happening in fluorescent-lit rooms
              across the country: people in real pain being rushed through
              physical therapy like products on a conveyor belt, told to be
              grateful they&apos;re getting any care at all.
            </p>

            <p>You don&apos;t feel seen. You don&apos;t feel heard.</p>
            <p>You definitely don&apos;t feel better.</p>

            <p>
              That&apos;s where this story starts. Not with a fancy machine or a
              miracle stretching routine, but with one physical therapist in the
              Bronx who got tired of watching people leave just as broken as
              they arrived—and decided he&apos;d rather risk everything than
              keep playing along.
            </p>

            <h4>The PT Mill: Where Time Goes to Die</h4>

            <p>
              If you&apos;ve ever done physical therapy at a high-volume clinic,
              you already know the script.
            </p>

            <p>
              You walk in hurting, scared, or just exhausted from dealing with
              the same problem for months or years. You fill out forms, circle
              where it hurts on a stick figure chart, repeat your story three
              times to three different people, and then finally see the
              therapist—who already looks behind.
            </p>

            <p>You get five minutes of hands-on time, if that.</p>

            <p>
              The therapist is juggling three or four patients at once. You get
              sent to a bike, a band, a table. You&apos;re handed a generic
              exercise sheet that looks suspiciously like what they give
              everyone. You do “3 sets of 10,” you get told to come back two or
              three times a week, and you go home wondering what exactly just
              happened.
            </p>

            <p>
              On paper, the clinic is “helping a lot of people.” In reality,
              it&apos;s bleeding everyone slowly—time, money, and hope.
            </p>

            <p>That&apos;s the world where Vic Balaoing, DPT, started.</p>

            <p>
              He did everything right. He went through the education, he learned
              the science, he sharpened his skills. He walked into the
              profession hungry to fix people, not just see them.
            </p>

            <p>
              What he ran into wasn&apos;t a knowledge problem. It was a time
              problem—weaponized by a business model.
            </p>

            <p>
              He&apos;d walk into a room where someone had been living with back
              pain for seven years. What they really needed was twenty solid
              minutes of focused, hands-on work and another ten to fifteen
              minutes of targeted, coached movement. That&apos;s how you change
              a pattern that has been stuck for years.
            </p>

            <p>
              What the system allowed was more like five minutes of rushed
              manual work, a quick explanation, and then: “Hop on the bike, do
              these clamshells, here&apos;s a band, see you in a few days.”
            </p>

            <p>
              Patients came in with hope and left with homework and confusion.
            </p>

            <p>
              “They start believing they&apos;re the problem,” Vic would later
              say. “Not the system, not the setup. The patient walks away
              thinking, ‘Maybe this is as good as it gets.’ That killed me.”
            </p>

            <p>
              That isn&apos;t burnout from long hours. That&apos;s burnout from
              constantly betraying what you know is possible.
            </p>

            <h4>Breaking Point: When “Good Enough” Wasn&apos;t</h4>

            <p>
              Most people inside the system eventually make peace with it. They
              shrug, tell themselves “this is healthcare,” and adjust their
              conscience until it stops yelling.
            </p>

            <p>Vic couldn&apos;t do that.</p>

            <p>
              He watched patient after patient plateau, not because their body
              couldn&apos;t improve, but because the model he was forced to work
              in would not allow the care they actually needed.
            </p>

            <p>
              He hit a point where he had to decide: stay in the machine, hit
              the productivity numbers, and learn to look away—or leave and risk
              failing on his own terms.
            </p>

            <p>He walked away.</p>

            <p>
              Leaving a “safe” healthcare job isn&apos;t romantic. There&apos;s
              no soundtrack, no slow clap. There are just student loans, rent,
              family, and everyone asking if you&apos;ve lost your mind.
            </p>

            <p>
              His first move was to open a clinic with a friend—another PT who
              swore they believed the same thing: more time with each person, no
              assembly line, real care.
            </p>

            <p>
              They meant it. But the system they were trying to escape followed
              them anyway.
            </p>

            <p>
              Rent doesn&apos;t care about your ethics. Insurance delays don&apos;t
              care about your mission. Equipment costs don&apos;t care how badly
              you want to help people.
            </p>

            <p>And the whisper started:</p>

            <p>
              “If we just add a few more patients per hour…”  
              “If we just shorten each session a little…”  
              “If we just see two people at once sometimes…”
            </p>

            <p>
              It sounds innocent at first. Just a small adjustment. Just for
              now.
            </p>

            <p>
              Until one day you look up and realize you&apos;ve slowly rebuilt
              the very thing you swore you&apos;d never become—just with
              different branding.
            </p>

            <p>
              “We started talking about time in terms of survival instead of
              outcomes,” Vic says. “The second we started asking, ‘How many can
              we fit?’ instead of, ‘How well can we treat?’ I knew we were in
              trouble.”
            </p>

            <p>
              The partnership broke. On a spreadsheet, it looks like a failure.
              In real life, it was the moment he refused to let his standards be
              negotiated away by fear.
            </p>

            <p>
              Out of that wreckage, he made a harsh decision: if he didn&apos;t
              build a clinic that protected his own standards from pressure,
              money, and panic, then eventually he would compromise too.
            </p>

            <p>That&apos;s how Function in Motion Physical Therapy PC was born.</p>

            <h4>Function in Motion: A Clinic Built Around a Line That Doesn&apos;t Move</h4>

            <p>
              Function in Motion didn&apos;t appear out of nowhere. It came out
              of everything Vic hated about the PT mill—and a choice to flip it
              completely.
            </p>

            <p>
              The first non-negotiable was simple and radical in today&apos;s
              system: time.
            </p>

            <p>
              Sessions aren&apos;t 15 rushed minutes. They&apos;re 45 to 60
              minutes. They&apos;re one-on-one. The clock exists to give the
              patient what they need, not to push them out the door.
            </p>

            <p>
              Time is how you actually find the root cause instead of chasing
              the symptom. Time is how you test movement patterns, explain what
              you&apos;re doing, and coach exercises so they&apos;re done right.
            </p>

            <p>Time is the first treatment.</p>

            <p>
              The second non-negotiable was technology used for the right
              reasons—not as a prop, not as a flex on social media.
            </p>

            <p>
              The clinic invested in things like the Alter-G Antigravity
              Treadmill, so people could walk or run with reduced body weight
              when their joints or healing tissue couldn&apos;t tolerate full
              impact yet. They brought in Stemwave Shockwave Therapy for
              stubborn tendons and chronic soft tissue problems that don&apos;t
              respond to basic stretching and bands.
            </p>

            <p>
              Those tools aren&apos;t the star of the show, and Vic is clear
              about that. They just expand what&apos;s possible when the goal is
              to actually restore function—not just get someone to a “good
              enough” that still hurts every day.
            </p>

            <p>
              Third, he built a roadmap. Not a rigid template, but a clear,
              structured way to move someone from “I&apos;m stuck” to “I trust
              my body again.”
            </p>

            <p>
              It starts with a deep assessment—more than “touch your toes and
              tell me when it hurts.” It moves through explanation in plain
              language, a plan that works with the patient&apos;s actual life,
              real progression, and finally, prevention and ownership.
            </p>

            <p>
              No shortcuts. No pretending three visits will undo ten years of
              compensation.
            </p>

            <h4>Claudette: When “Nothing Works” Finally Met “We&apos;re Not Done Yet”</h4>

            <p>
              If you&apos;ve lived with long-term pain, you might hear yourself
              in Claudette.
            </p>

            <p>
              By the time she walked into Function in Motion, she was worn out.
              Not just in her body, but in her hope. She had already done “the
              right things.” She had gone to physical therapy—more than one
              clinic, more than one round. She did the exercises, showed up, and
              waited for change.
            </p>

            <p>It never came.</p>

            <p>
              Another clinic. Another evaluation. Another set of generic
              exercises. A year and a half of her life spent in rooms that felt
              more like routine than rehab.
            </p>

            <p>
              When that happens once, you blame bad luck or a bad match. When it
              happens over and over, a different story forms in your head:
            </p>

            <p>“Maybe this is just how my body is now.”</p>

            <p>
              She didn&apos;t walk into Function in Motion full of optimism. She
              walked in out of obligation, referral, and a thin, tired sliver of
              “maybe.”
            </p>

            <p>
              Her first session there didn&apos;t look like anything she&apos;d
              had before.
            </p>

            <p>
              No one rushed her onto a bike. No one slapped heat on her back
              “while we start your chart.” No one handed her the same sheet
              they&apos;d hand to a college athlete, a retired teacher, and a
              post-surgical knee—all in the same afternoon.
            </p>

            <p>
              They spent the entire hour assessing. Watching how she moved,
              where she stiffened, what triggered her pain, what eased it, what
              she avoided, how she walked, how she stood up, what she feared.
            </p>

            <p>
              They didn&apos;t just treat where it hurt. They hunted down why it
              hurt.
            </p>

            <p>
              The breakthrough wasn&apos;t a dramatic one-session miracle. It
              was something quieter and more powerful: her body finally started
              to respond.
            </p>

            <p>
              Not with random “good days,” but with measurable, trackable
              change. Movements that had been unavailable to her for years began
              to open up again. Strength started to return. She didn&apos;t feel
              like a permanent patient anymore. She felt like someone in
              progress.
            </p>

            <p>
              Later, she would put it simply: “Thanks to Vic and his caring,
              considerate, awesome staff my mobility has improved considerably.
              They are really true to their name ‘Function in Motion.’”
            </p>

            <p>
              That line matters. Because it didn&apos;t come from magic hands or
              a miracle device. It came from a clinic that refused to give up on
              her just because the system already had.
            </p>

            <h4>So What&apos;s the Secret?</h4>

            <p>
              This is where most people want a simple answer. They want the name
              of a special technique, a trendy protocol, or a piece of equipment
              to point at and say, “There, that&apos;s why this place works.”
            </p>

            <p>
              When people ask Vic that, his answer is almost annoyingly honest:
            </p>

            <p>
              “Most good physical therapists know what I know. They care as much
              as I do. They&apos;re not the problem. The system they&apos;re
              trapped in is.”
            </p>

            <p>
              It isn&apos;t about a genius secret. It&apos;s about creating a
              place where good care is actually possible.
            </p>

            <p>
              The “secret sauce” is blunt and simple: enough time to think and
              treat, enough focus to listen and adjust, and enough integrity to
              say no to shortcuts, even when the safer choice would be to
              compromise.
            </p>

            <p>No trademarked formula. No buzzword.</p>

            <p>
              Just a clinic designed from the ground up to protect one thing:
              your outcome.
            </p>

            <h4>More Than a Nice Website or a Clean Logo</h4>

            <p>
              It&apos;s easy to hear all of this and shrug. Just another clinic
              story. Just another brand trying to sound different.
            </p>

            <p>
              But if you&apos;re the person who stopped playing with your kids
              or grandkids because you don&apos;t trust your body… if you&apos;ve
              watched your world shrink from a full life of stairs, walks,
              sports, and work to a careful routine of avoidance… if you&apos;ve
              felt dismissed and rushed in places that were supposed to help
              you—then you know this isn&apos;t about branding.
            </p>

            <p>
              It&apos;s about wanting your life back badly enough to try one
              more time—but only with people who refuse to treat you like a
              slot on a schedule.
            </p>

            <p>
              That&apos;s what Function in Motion Physical Therapy PC in the
              Bronx is built around. Not perfection. Not miracles on demand.
            </p>

            <p>Just a relentless standard that doesn&apos;t move.</p>

            <p>
              Time that isn&apos;t negotiable. Care that isn&apos;t rushed.
              Plans that aren&apos;t copied. And a team that sees you as a
              person carrying real pain and real hope—not a case to be “cleared”
              as fast as possible.
            </p>

            <p>
              If you&apos;re tired of just “managing” pain and ready to start
              rebuilding function for real, this is where that conversation
              starts.
            </p>

            <p>
              Not with guarantees that it will all be easy.  
              But with a promise: you won&apos;t be treated like you&apos;re
              beyond help.
            </p>

            <p>
              That&apos;s the relentless part. And that&apos;s what makes this
              place worth talking about.
            </p>
          </Body>
        </ArticleCard>
      </Container>
    </Section>
  );
};

export default Blog;