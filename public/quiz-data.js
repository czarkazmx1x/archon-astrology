const archonData = {
    'solar': {
        name: 'The Solar Warden',
        theme: 'Ego, identity, pride, recognition, visibility, self-worth through being seen.',
        shadow: 'The Solar Warden appears when your life force is tangled with recognition. You may feel unseen, disrespected, underestimated, or blocked from stepping into your true authority. This Warden does not always create arrogance. Sometimes it creates the opposite: hiding, shame, resentment, and the quiet pain of knowing you are more than what your life currently reflects.',
        why: 'You are being asked to separate authentic confidence from the need to be validated. The Solar Warden feeds on the wound that says, “If they do not see me, I do not exist.”',
        trap: 'Performing for approval, defending your image, comparing your path, or waiting for others to recognize your worth before you act.',
        liberation: 'Be visible before you feel fully ready. Let your work prove itself through repetition, not performance.',
        assignment: 'For seven days, do one visible action daily: post, pitch, apply, speak, publish, lead, or make a clear decision. Do not explain yourself excessively.',
        command: 'I do not need permission to shine. I embody my authority through action.'
    },
    'lunar': {
        name: 'The Lunar Warden',
        theme: 'Emotional attachment, memory, dependency, fear of abandonment, nervous system patterns.',
        shadow: 'The Lunar Warden appears when your emotional body is running your life from old memories. You may be reacting to the present through the pain of the past. This Warden can make you cling, withdraw, panic, over-nurture, or search for safety in people who cannot consistently provide it.',
        why: 'You are being asked to stop confusing attachment with safety. The Lunar Warden feeds on emotional repetition: old fears, old wounds, old needs, old family imprints.',
        trap: 'Trying to get peace from someone else’s behavior before creating peace inside your own body.',
        liberation: 'Regulate first. Respond second. Choose from calm, not fear.',
        assignment: 'Before every emotional reaction, pause for 90 seconds. Put one hand on your chest and one on your stomach. Ask: “Am I reacting to now, or am I reacting to a memory?”',
        command: 'I am safe inside myself. I do not chase emotional security from unstable places.'
    },
    'mercurial': {
        name: 'The Mercurial Warden',
        theme: 'Overthinking, anxiety, mental loops, mixed signals, analysis paralysis, information overload.',
        shadow: 'The Mercurial Warden appears when the mind becomes a maze. You may be trying to think your way into certainty, decode every signal, research endlessly, or solve emotional pain through analysis. The mind becomes sharp, but not peaceful.',
        why: 'You are being asked to turn information into action. The Mercurial Warden feeds on unfinished thought loops and the belief that one more answer will finally make you feel safe.',
        trap: 'Checking, rereading, asking, searching, debating, planning, and never committing to a clean next step.',
        liberation: 'Simplify. Decide. Execute. Let reality give you feedback.',
        assignment: 'Choose one problem and write only three possible actions. Pick one. Do it within 24 hours. No more research until after action.',
        command: 'My mind serves my life. I choose clarity through action.'
    },
    'venusian': {
        name: 'The Venusian Warden',
        theme: 'Love, pleasure, beauty, comfort, validation, self-worth, desire.',
        shadow: 'The Venusian Warden appears when desire becomes a chain. You may crave affection, comfort, luxury, sweetness, romance, or being chosen. There is nothing wrong with desire, but this Warden distorts it into dependency, overgiving, spending for comfort, or compromising your worth to receive crumbs.',
        why: 'You are being asked to reclaim value. The Venusian Warden feeds on the wound that says, “If I am desired, I am worthy.”',
        trap: 'Chasing love, comfort, pleasure, or approval while abandoning your standards.',
        liberation: 'Become the source of the value you keep trying to extract from others.',
        assignment: 'For seven days, do one act of self-respect before seeking comfort: clean your space, save money, dress with intention, eat well, set a boundary, or stop chasing a weak signal.',
        command: 'I am the value. I do not negotiate my worth for temporary comfort.'
    },
    'martial': {
        name: 'The Martial Warden',
        theme: 'Anger, impulse, conflict, survival drive, force, courage, action.',
        shadow: 'The Martial Warden appears when your fire has nowhere clean to go. You may feel impatient, reactive, combative, restless, or ready to force an outcome. Under the anger is often fear: fear of powerlessness, fear of disrespect, fear of being trapped.',
        why: 'You are being asked to discipline your fire. The Martial Warden feeds on reaction, escalation, and the illusion that force creates freedom.',
        trap: 'Acting from adrenaline instead of strategy.',
        liberation: 'Move your body. Take direct action. Do not waste your fire on battles that do not build your future.',
        assignment: 'Every day, complete one physical action and one practical action: workout/walk + pitch/apply/build/repair/organize. Fire must become progress.',
        command: 'My fire is sacred. I direct it toward victory, not destruction.'
    },
    'jovian': {
        name: 'The Jovian Warden',
        theme: 'Expansion, belief, optimism, excess, meaning, big promises, overconfidence.',
        shadow: 'The Jovian Warden appears when growth becomes inflated. You may chase big ideas, big visions, big plans, or big breakthroughs while avoiding the smaller steps required to make them real. This Warden can make everything feel possible but nothing become consistent.',
        why: 'You are being asked to ground faith into structure. The Jovian Warden feeds on the fantasy of expansion without discipline.',
        trap: 'Believing the next big idea will save you while neglecting the current practical step.',
        liberation: 'Shrink the vision into a repeatable system.',
        assignment: 'Choose one big goal and reduce it to a daily 30-minute action. Do only that for seven days. No new grand plan until the seven days are complete.',
        command: 'My vision becomes real through consistent action.'
    },
    'saturnian': {
        name: 'The Saturnian Warden',
        theme: 'Fear, delay, pressure, discipline, guilt, limitation, karmic heaviness.',
        shadow: 'The Saturnian Warden appears when life feels heavy, delayed, blocked, or punishing. You may feel like everything requires too much effort, that support is missing, or that time is running against you. Saturn’s shadow is not just hardship — it is the belief that hardship means failure.',
        why: 'You are being asked to build a structure strong enough to hold the life you want. The Saturnian Warden feeds on avoidance, guilt, procrastination, and the fear of responsibility.',
        trap: 'Interpreting delay as denial.',
        liberation: 'Make the next step boring, repeatable, and non-negotiable.',
        assignment: 'Create a “minimum discipline” checklist: wake time, money action, body action, work action, cleanup action. Complete the minimum every day.',
        command: 'Delay is not denial. I build patiently, and reality bends through discipline.'
    },
    'uranian': {
        name: 'The Uranian Warden',
        theme: 'Chaos, rebellion, freedom, disruption, instability, detachment, sudden change.',
        shadow: 'The Uranian Warden appears when freedom becomes instability. You may crave escape, novelty, independence, or a total reset. You may detach quickly, rebel against expectations, or destroy routines the moment they start feeling restrictive.',
        why: 'You are being asked to create freedom without chaos. The Uranian Warden feeds on the belief that commitment equals imprisonment.',
        trap: 'Breaking things just to feel free.',
        liberation: 'Design a life with enough space that you do not need to sabotage stability.',
        assignment: 'Choose one routine and make it flexible instead of abandoning it. Example: “I work out daily” becomes “I move for 15 minutes daily in any form.”',
        command: 'I can be free and consistent. I do not need chaos to feel alive.'
    },
    'neptunian': {
        name: 'The Neptunian Warden',
        theme: 'Illusion, fantasy, escapism, confusion, dreams, idealization, spiritual fog.',
        shadow: 'The Neptunian Warden appears when reality becomes blurred. You may be romanticizing someone, avoiding facts, escaping into fantasy, or spiritually explaining away something that requires direct action. This Warden can feel mystical, but its shadow is confusion.',
        why: 'You are being asked to tell the truth without destroying your imagination. The Neptunian Warden feeds on avoidance disguised as compassion, hope, or spiritual meaning.',
        trap: 'Mistaking potential for reality.',
        liberation: 'Believe actions more than promises, fantasies, or signs.',
        assignment: 'Write two lists: “What I wish were true” and “What the evidence shows.” Make one decision based only on the evidence list.',
        command: 'I honor my dreams, but I obey the truth.'
    },
    'plutonian': {
        name: 'The Plutonian Warden',
        theme: 'Control, obsession, power, betrayal, transformation, emotional intensity, shadow work.',
        shadow: 'The Plutonian Warden appears when something deep inside you refuses to stay buried. You may be dealing with obsession, suspicion, betrayal wounds, power struggles, jealousy, control, or emotional extremes. This Warden does not come for surface change. It comes for total transformation.',
        why: 'You are being asked to reclaim power without controlling people or outcomes. The Plutonian Warden feeds on fear of betrayal, abandonment, humiliation, and loss of control.',
        trap: 'Trying to feel safe by controlling what cannot be controlled.',
        liberation: 'Withdraw energy from obsession and put it into transformation.',
        assignment: 'Each day, identify one place you are trying to control the outside world. Redirect that energy into one self-controlled action: money, body, skill, boundary, cleanup, silence, or execution.',
        command: 'My power returns when I stop feeding what drains me.'
    },
    'rahu': {
        name: 'The Rahu Warden',
        theme: 'Craving, ambition, obsession, hunger, status, future fixation, wanting more.',
        shadow: 'The Rahu Warden appears when desire becomes endless. You may feel like you are chasing a future that keeps moving away: more money, more attention, more success, more proof, more certainty, more power. Rahu creates hunger — but not always satisfaction.',
        why: 'You are being asked to master desire instead of being mastered by it. The Rahu Warden feeds on the belief that your life begins after the next achievement.',
        trap: 'Chasing the next thing while neglecting the foundation beneath your feet.',
        liberation: 'Turn obsession into strategy.',
        assignment: 'Name your biggest craving. Then write the actual system required to reach it. Complete the first small step every day for seven days.',
        command: 'I transform craving into strategy. I do not worship the future; I build it.'
    },
    'ketu': {
        name: 'The Ketu Warden',
        theme: 'Detachment, numbness, karmic exhaustion, spiritual bypassing, surrender, loss of desire.',
        shadow: 'The Ketu Warden appears when part of you has stopped reaching. You may feel tired, detached, numb, spiritually exhausted, or like nothing matters. This can look peaceful from the outside, but underneath it may be disappointment, grief, or the belief that wanting things only leads to pain.',
        why: 'You are being asked to return to life without losing your spiritual depth. The Ketu Warden feeds on resignation disguised as wisdom.',
        trap: 'Calling it surrender when it is actually giving up.',
        liberation: 'Reconnect to one honest desire and take one physical step toward it.',
        assignment: 'Each morning, ask: “What do I still want, even if I am tired?” Then take one small action toward it before noon.',
        command: 'I return to life. My detachment becomes wisdom, not disappearance.'
    }
};

const quizQuestions = [
    // Section 1
    {
        id: 1, section: "Current Emotional Frequency", text: "What feeling has been strongest in your life lately?",
        options: [
            { text: "I feel unseen, disrespected, or overlooked.", scores: { solar: 2 } },
            { text: "I feel emotionally unsafe or afraid of losing someone/something.", scores: { lunar: 2 } },
            { text: "I cannot stop thinking, analyzing, or replaying things.", scores: { mercurial: 2 } },
            { text: "I feel blocked, heavy, delayed, or punished by life.", scores: { saturnian: 2 } },
            { text: "I feel obsessed with getting control or getting the truth.", scores: { plutonian: 2 } },
            { text: "I feel numb, detached, or like I am disappearing from my own life.", scores: { ketu: 2 } }
        ]
    },
    {
        id: 2, section: "Current Emotional Frequency", text: "When you are stressed, what do you usually do?",
        options: [
            { text: "Try to prove myself or defend my image.", scores: { solar: 2 } },
            { text: "Withdraw, cling, or become emotionally reactive.", scores: { lunar: 2 } },
            { text: "Research, text, check, reread, or mentally spiral.", scores: { mercurial: 2 } },
            { text: "Push harder, argue, confront, or act impulsively.", scores: { martial: 2 } },
            { text: "Escape into fantasy, sleep, scrolling, substances, spirituality, or avoidance.", scores: { neptunian: 2 } },
            { text: "Shut down and tell myself nothing matters.", scores: { ketu: 2 } }
        ]
    },
    {
        id: 3, section: "Current Emotional Frequency", text: "Which statement feels most true right now?",
        options: [
            { text: "I know I have potential, but I feel like life is not recognizing me.", scores: { solar: 2 } },
            { text: "I keep getting pulled back into old emotional patterns.", scores: { lunar: 2 } },
            { text: "I feel like my mind is working against me.", scores: { mercurial: 2 } },
            { text: "I want peace, love, comfort, or affection, but I feel deprived of it.", scores: { venusian: 2 } },
            { text: "I am tired of waiting and want to force something to happen.", scores: { martial: 2 } },
            { text: "I am hungry for a bigger life, but I do not know when enough will be enough.", scores: { rahu: 2 } }
        ]
    },
    // Section 2
    {
        id: 4, section: "Relationship Pattern", text: "What hurts you most in relationships?",
        options: [
            { text: "Feeling unappreciated or disrespected.", scores: { solar: 2 } },
            { text: "Feeling abandoned, rejected, or emotionally unsafe.", scores: { lunar: 2 } },
            { text: "Mixed signals, unclear communication, or unanswered questions.", scores: { mercurial: 2 } },
            { text: "Feeling unwanted, unattractive, or not chosen.", scores: { venusian: 2 } },
            { text: "Power struggles, betrayal, secrecy, or control.", scores: { plutonian: 2 } },
            { text: "Feeling like love always costs me my freedom.", scores: { uranian: 2 } }
        ]
    },
    {
        id: 5, section: "Relationship Pattern", text: "What is your shadow reaction when love feels threatened?",
        options: [
            { text: "I try to win, prove, or regain status.", scores: { solar: 2 } },
            { text: "I become emotionally overwhelmed or dependent.", scores: { lunar: 2 } },
            { text: "I interrogate, analyze, test, or search for proof.", scores: { mercurial: 2 } },
            { text: "I become jealous, possessive, or deeply suspicious.", scores: { plutonian: 2 } },
            { text: "I detach suddenly or act like I do not care.", scores: { uranian: 2 } },
            { text: "I fantasize about someone/something else saving me.", scores: { neptunian: 2 } }
        ]
    },
    {
        id: 6, section: "Relationship Pattern", text: "What kind of relationship pattern repeats for you?",
        options: [
            { text: "I attract people who challenge my pride or self-worth.", scores: { solar: 1, venusian: 1 } },
            { text: "I attract emotionally unavailable or inconsistent people.", scores: { lunar: 1, uranian: 1 } },
            { text: "I get stuck in conversations that never resolve anything.", scores: { mercurial: 2 } },
            { text: "I overgive, over-sacrifice, or try to be the healer.", scores: { neptunian: 1, ketu: 1 } },
            { text: "I end up in control battles or intense emotional bonds.", scores: { plutonian: 2 } },
            { text: "I outgrow people quickly or become restless when things become routine.", scores: { uranian: 2 } }
        ]
    },
    {
        id: 7, section: "Relationship Pattern", text: "What are you most afraid to admit in love?",
        options: [
            { text: "I need to feel admired.", scores: { solar: 2 } },
            { text: "I am scared of being left.", scores: { lunar: 2 } },
            { text: "I do not trust what people say.", scores: { mercurial: 1, plutonian: 1 } },
            { text: "I crave affection more than I want to admit.", scores: { venusian: 2 } },
            { text: "I sometimes want control more than closeness.", scores: { plutonian: 2 } },
            { text: "I sometimes want to disappear instead of deal with it.", scores: { ketu: 2 } }
        ]
    },
    // Section 3
    {
        id: 8, section: "Money, Work, and Ambition", text: "What blocks your financial momentum most?",
        options: [
            { text: "I want to be seen as successful, but I get discouraged when results are slow.", scores: { solar: 1, saturnian: 1 } },
            { text: "Emotional stress drains my ability to focus.", scores: { lunar: 2 } },
            { text: "I keep researching, planning, or switching ideas instead of executing.", scores: { mercurial: 2 } },
            { text: "I lose motivation when the work becomes repetitive.", scores: { martial: 1, uranian: 1 } },
            { text: "I chase big opportunities but struggle with consistency.", scores: { jovian: 1, rahu: 1 } },
            { text: "I feel cursed, blocked, delayed, or like money is always heavy.", scores: { saturnian: 2 } }
        ]
    },
    {
        id: 9, section: "Money, Work, and Ambition", text: "What is your biggest work pattern?",
        options: [
            { text: "I need my work to matter or elevate my identity.", scores: { solar: 2 } },
            { text: "I work best when I feel emotionally supported.", scores: { lunar: 1, venusian: 1 } },
            { text: "I am good with ideas but can get lost in too many directions.", scores: { mercurial: 2 } },
            { text: "I start with fire, then lose steam.", scores: { martial: 2 } },
            { text: "I dream big but sometimes avoid the boring details.", scores: { jovian: 2 } },
            { text: "I can work hard, but fear and pressure make everything feel heavier.", scores: { saturnian: 2 } }
        ]
    },
    {
        id: 10, section: "Money, Work, and Ambition", text: "What type of opportunity tempts you most?",
        options: [
            { text: "Something that makes me known, respected, or admired.", scores: { solar: 2 } },
            { text: "Something that gives me emotional security.", scores: { lunar: 2 } },
            { text: "Something intellectual, strategic, technical, or communication-based.", scores: { mercurial: 2 } },
            { text: "Something beautiful, comfortable, luxurious, romantic, or creative.", scores: { venusian: 2 } },
            { text: "Something bold, competitive, risky, or fast-moving.", scores: { martial: 2 } },
            { text: "Something huge, viral, scalable, or life-changing.", scores: { rahu: 2 } }
        ]
    },
    {
        id: 11, section: "Money, Work, and Ambition", text: "When money is tight, what pattern appears?",
        options: [
            { text: "Shame about status or feeling like I should be farther ahead.", scores: { solar: 1, saturnian: 1 } },
            { text: "Fear, insecurity, or emotional panic.", scores: { lunar: 2 } },
            { text: "Overthinking every option until I freeze.", scores: { mercurial: 2 } },
            { text: "Spending for comfort or emotional relief.", scores: { venusian: 2 } },
            { text: "Anger, frustration, or wanting to make a drastic move.", scores: { martial: 2 } },
            { text: "A fantasy that one big win will fix everything.", scores: { jovian: 1, rahu: 1 } }
        ]
    },
    // Section 4
    {
        id: 12, section: "Inner Shadow", text: "Which inner voice is loudest?",
        options: [
            { text: "“You should be more important than this.”", scores: { solar: 2 } },
            { text: "“You are not safe unless they stay.”", scores: { lunar: 2 } },
            { text: "“Figure it out now or something bad will happen.”", scores: { mercurial: 2 } },
            { text: "“You need this person/comfort/desire to feel okay.”", scores: { venusian: 2 } },
            { text: "“Fight. Push. Force. Win.”", scores: { martial: 2 } },
            { text: "“Nothing matters. Let go. Stop caring.”", scores: { ketu: 2 } }
        ]
    },
    {
        id: 13, section: "Inner Shadow", text: "Which shadow do you recognize in yourself?",
        options: [
            { text: "Pride.", scores: { solar: 2 } },
            { text: "Neediness.", scores: { lunar: 2 } },
            { text: "Anxiety.", scores: { mercurial: 2 } },
            { text: "Pleasure-seeking or validation-seeking.", scores: { venusian: 2 } },
            { text: "Rage or impatience.", scores: { martial: 2 } },
            { text: "Control or obsession.", scores: { plutonian: 2 } }
        ]
    },
    {
        id: 14, section: "Inner Shadow", text: "What illusion traps you most?",
        options: [
            { text: "“Once people respect me, I will be okay.”", scores: { solar: 2 } },
            { text: "“Once I feel emotionally safe, I can finally move.”", scores: { lunar: 2 } },
            { text: "“Once I understand everything, I can relax.”", scores: { mercurial: 2 } },
            { text: "“Once I get love/comfort/pleasure, the pain will stop.”", scores: { venusian: 2 } },
            { text: "“Once I win or dominate the situation, I will be free.”", scores: { martial: 1, plutonian: 1 } },
            { text: "“Once I get the big breakthrough, everything will be fixed.”", scores: { jovian: 1, rahu: 1 } }
        ]
    },
    {
        id: 15, section: "Inner Shadow", text: "What do you avoid facing?",
        options: [
            { text: "My need for validation.", scores: { solar: 2 } },
            { text: "My emotional dependency or fear.", scores: { lunar: 2 } },
            { text: "My inability to stop thinking and start acting.", scores: { mercurial: 2 } },
            { text: "My attachment to comfort, pleasure, or being chosen.", scores: { venusian: 2 } },
            { text: "My anger.", scores: { martial: 2 } },
            { text: "My grief, trauma, resentment, or need for control.", scores: { plutonian: 2 } }
        ]
    },
    // Section 5
    {
        id: 16, section: "Spiritual Pattern", text: "How do you usually seek meaning?",
        options: [
            { text: "Through purpose, destiny, leadership, or identity.", scores: { solar: 2 } },
            { text: "Through memory, intuition, dreams, ancestors, or emotional signs.", scores: { lunar: 2 } },
            { text: "Through study, symbols, patterns, language, or systems.", scores: { mercurial: 2 } },
            { text: "Through beauty, love, art, pleasure, or devotion.", scores: { venusian: 2 } },
            { text: "Through challenge, initiation, conflict, or trial by fire.", scores: { martial: 2 } },
            { text: "Through surrender, emptiness, detachment, or mystical dissolution.", scores: { ketu: 2 } }
        ]
    },
    {
        id: 17, section: "Spiritual Pattern", text: "What spiritual trap are you most vulnerable to?",
        options: [
            { text: "Believing I am special, chosen, or above the lesson.", scores: { solar: 2 } },
            { text: "Confusing emotional intensity with truth.", scores: { lunar: 1, plutonian: 1 } },
            { text: "Turning everything into signs and analysis.", scores: { mercurial: 2 } },
            { text: "Using love, beauty, or pleasure to avoid pain.", scores: { venusian: 2 } },
            { text: "Mistaking conflict for progress.", scores: { martial: 2 } },
            { text: "Escaping reality through fantasy, spirituality, or denial.", scores: { neptunian: 2 } }
        ]
    },
    {
        id: 18, section: "Spiritual Pattern", text: "Which phrase feels most uncomfortable because it might be true?",
        options: [
            { text: "“Your pride is asking to be purified.”", scores: { solar: 2 } },
            { text: "“Your attachment is not the same as love.”", scores: { lunar: 2 } },
            { text: "“Your mind is trying to control what your soul must experience.”", scores: { mercurial: 2 } },
            { text: "“Your desire is teaching you where you gave your power away.”", scores: { venusian: 2 } },
            { text: "“Your anger is covering fear.”", scores: { martial: 2 } },
            { text: "“Your detachment is sometimes just disappointment wearing a spiritual mask.”", scores: { ketu: 2 } }
        ]
    },
    // Section 6
    {
        id: 19, section: "Action Pattern", text: "What do you need most right now?",
        options: [
            { text: "Confidence without ego.", scores: { solar: 2 } },
            { text: "Emotional safety without dependency.", scores: { lunar: 2 } },
            { text: "Mental clarity without obsession.", scores: { mercurial: 2 } },
            { text: "Love and pleasure without losing myself.", scores: { venusian: 2 } },
            { text: "Courage without destruction.", scores: { martial: 2 } },
            { text: "Discipline without self-punishment.", scores: { saturnian: 2 } }
        ]
    },
    {
        id: 20, section: "Action Pattern", text: "What would change your life fastest?",
        options: [
            { text: "Showing up publicly and letting myself be seen.", scores: { solar: 2 } },
            { text: "Healing my nervous system and emotional attachments.", scores: { lunar: 2 } },
            { text: "Choosing one plan and executing it.", scores: { mercurial: 2 } },
            { text: "Valuing myself enough to stop chasing validation.", scores: { venusian: 2 } },
            { text: "Taking direct action instead of waiting.", scores: { martial: 2 } },
            { text: "Rebuilding structure, routine, and discipline.", scores: { saturnian: 2 } }
        ]
    },
    {
        id: 21, section: "Action Pattern", text: "What is the first sign that you are losing your power?",
        options: [
            { text: "I perform for approval.", scores: { solar: 2 } },
            { text: "I emotionally collapse or chase reassurance.", scores: { lunar: 2 } },
            { text: "I get trapped in analysis.", scores: { mercurial: 2 } },
            { text: "I compromise my worth for affection or comfort.", scores: { venusian: 2 } },
            { text: "I react before thinking.", scores: { martial: 2 } },
            { text: "I withdraw from life and call it peace.", scores: { ketu: 2 } }
        ]
    },
    {
        id: 22, section: "Action Pattern", text: "What medicine do you resist most?",
        options: [
            { text: "Humility.", scores: { solar: 2 } },
            { text: "Self-soothing.", scores: { lunar: 2 } },
            { text: "Simplicity.", scores: { mercurial: 2 } },
            { text: "Self-worth.", scores: { venusian: 2 } },
            { text: "Patience.", scores: { martial: 2 } },
            { text: "Responsibility.", scores: { saturnian: 2 } }
        ]
    },
    // Section 7
    {
        id: 23, section: "Deeper Pattern Identification", text: "What kind of suffering feels most familiar?",
        options: [
            { text: "Feeling invisible when I know I have something powerful inside me.", scores: { solar: 2 } },
            { text: "Feeling emotionally abandoned or unsafe.", scores: { lunar: 2 } },
            { text: "Feeling mentally trapped in questions with no clean answer.", scores: { mercurial: 2 } },
            { text: "Feeling unloved, unwanted, or deprived of sweetness.", scores: { venusian: 2 } },
            { text: "Feeling like I always have to fight.", scores: { martial: 2 } },
            { text: "Feeling like life keeps delaying or punishing me.", scores: { saturnian: 2 } }
        ]
    },
    {
        id: 24, section: "Deeper Pattern Identification", text: "What pattern do others probably notice about you?",
        options: [
            { text: "I care more about respect than I admit.", scores: { solar: 2 } },
            { text: "My emotions affect my decisions.", scores: { lunar: 2 } },
            { text: "I ask questions, analyze, or debate a lot.", scores: { mercurial: 2 } },
            { text: "I want love, comfort, beauty, or ease.", scores: { venusian: 2 } },
            { text: "I can be intense, direct, impatient, or combative.", scores: { martial: 2 } },
            { text: "I can become withdrawn, distant, or hard to reach.", scores: { ketu: 2 } }
        ]
    },
    {
        id: 25, section: "Deeper Pattern Identification", text: "What is your soul tired of repeating?",
        options: [
            { text: "Trying to prove my worth.", scores: { solar: 2 } },
            { text: "Trying to get emotional safety from unstable places.", scores: { lunar: 2 } },
            { text: "Trying to think my way out of pain.", scores: { mercurial: 2 } },
            { text: "Trying to be loved by people who do not value me properly.", scores: { venusian: 2 } },
            { text: "Trying to force outcomes that need time.", scores: { martial: 2 } },
            { text: "Trying to carry karmic heaviness that is no longer mine.", scores: { saturnian: 1, ketu: 1 } }
        ]
    }
];
