export class TeamList {
    constructor(){
        this.$teamList = document.querySelector(".team-list-container");
        this.eventController(this.$teamList);
        this.loadUserList();
    }
    async loadUserList(){
        this.makeTeamList(["hello","hi!","hi!","hi3123!","23hi!","12312hi!","hi!"]);
    }

    makeTeamList(teams){
        const template = teams.map((name,index) => this.teamTemplate(name,index));
        this.$teamList.innerHTML = "\n"+template.join("\n")+"\n";
        this.$teamList.insertAdjacentHTML("beforeend",this.addButton())
    }

    teamTemplate(name){
        return `
        <div class="team-card-container">
            <a href="#" class="card">
            <div class="card-title">
                ${name}
            </div>
            </a>
        </div>
        `
    }

    addButton(){
        return `
        <div class="add-team-button-container">
            <button id="add-team-button" class="ripple">
                <span class="material-icons">add</span>
            </button>
        </div>
        `
    }

    eventController(teamList){
        teamList.addEventListener('click', ({target}) => {
            if(target.id === 'add-team-button')
               prompt('팀 이름을 입력해주세요')
       })
    }
}