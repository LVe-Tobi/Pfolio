// Commandes personnalisées
const commands = {
    help: () => `<p>> Commandes disponibles:<br>
        <span class="neon-cyan">about</span> - Affiche mon profil<br>
        <span class="neon-cyan">skills</span> - Liste mes compétences<br>
        <span class="neon-cyan">projects</span> - Voir mes projets<br>
        <span class="neon-cyan">contact</span> - Me contacter</p>`,
    
    about: () => `<p>> <span class="neon-pink">[PROFIL]</span><br>
        Expert en sécurité informatique spécialisé pentest et cryptographie.<br>
        Niveau 30 - Licence Sécurité Informatique</p>`,
    
    skills: () => `<p>> <span class="neon-pink">[SKILLS]</span><br>
        • Pentest (85%)<br>
        • Cryptographie (78%)<br>
        • Wireshark/Nmap (90%)</p>`,
    
    projects: () => `<p>> <span class="neon-pink">[PROJETS]</span><br>
        • <span class="neon-yellow">Portail LDAP</span> - PHP/Python<br>
        • <span class="neon-yellow">Scripts AD</span> - Automatisation<br>
        • <span class="neon-yellow">CTF Write-ups</span> - HackTheBox</p>`,
    
    contact: () => `<p>> <span class="neon-pink">[CONTACT]</span><br>
        ✉️ <a href="mailto:Ivetobitella@gmail.com" class="neon-cyan">Ivetobitella@gmail.com</a><br>
        📞 +229 95 62 87 81</p>`
};

// Gestion des commandes
document.getElementById('command-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = e.target.value.trim().toLowerCase();
        const output = document.querySelector('.terminal-output');
        
        // Affiche la commande
        output.innerHTML += `<p><span class="prompt">root@cybersec:~$</span> ${input}</p>`;
        
        // Exécute la commande
        if (commands[input]) {
            output.innerHTML += commands[input]();
        } else {
            output.innerHTML += `<p>> <span class="neon-pink">Erreur:</span> Commande inconnue. Tapez 'help'</p>`;
        }
        
        // Reset l'input
        e.target.value = '';
        output.scrollTop = output.scrollHeight;
    }
});

// Effet de terminal qui boot
window.onload = () => {
    const output = document.querySelector('.terminal-output');
    const bootText = [
        "> Initialisation du système...",
        "> Chargement des modules de sécurité...",
        "> Connexion établie avec succès!"
    ];
    
    bootText.forEach((line, i) => {
        setTimeout(() => {
            output.innerHTML += `<p>${line}</p>`;
            output.scrollTop = output.scrollHeight;
        }, i * 800);
    });
};