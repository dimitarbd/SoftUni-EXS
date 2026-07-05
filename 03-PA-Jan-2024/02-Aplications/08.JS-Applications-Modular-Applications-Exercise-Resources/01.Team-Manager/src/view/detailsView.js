import { renderer } from "../common/render.js";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../common/userHelper.js";
import { getParametersId, goTo } from "../common/goTo.js";
import { dataService } from "../api/dataService.js";

let detailsTemp = (hasUser, team, hasOwner, pending, members, memberCount, isPending, isMember) => html`
<section id="team-home">
    <article class="layout">
        <img src="../..${team.logoUrl}" class="team-logo left-col">
        ${hasUser ? userActionTemp(team, memberCount, hasOwner, isPending, isMember): ""}
        ${memberTemp(hasOwner, isMember, members)}
        ${hasOwner ? ownerMemberAction(pending, team) : ''}
    </article>
</section>
`;

let userActionTemp = (team, memberCount, hasOwner, isPending, isMember) => html`
<div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${memberCount} Members</span>
            <div>
                ${hasOwner ? html`<a href="#" class="action">Edit team</a>`: ""}
                ${!isMember && !isPending ? html`<a @click=${onJoinTeam()} data-team-id=${team._id} href="#" class="action">Join team</a>`:""}
                ${!isMember ? html `<a href="#" class="action invert">Leave team</a>`:""}
                ${!isPending ? html`Membership pending. <a href="#">Cancel request</a>` : ""}
            </div>
        </div>
`;

let memberTemp = (hasOwner, isMember, members) => html`
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${isMember ? html`<li>My Username</li>`:""}
                ${members.map(member => {
                    if (hasOwner) {
                       return html`<li>${member.user.username}
                       ${hasOwner ? html`<a href="#" class="tm-control action">Remove from team</a>` : ""}
                       </li>`
                    }
                })}
                
                
            </ul>
        </div>
`;

let ownerMemberAction = (pending, team) => html`
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${pending.map(x=> html`
                <li>${x.user.username}<a data-user-id=${x.user._id} data-team-id=${x.team._id} @click=${onApproveUser}  href="#" class="tm-control action">Approve</a><a href="#"
                        class="tm-control action">Decline</a></li>
                `)}
            </ul>
        </div>
`;
 
export async function showDetailsView(ctx) {
    let userData = userHelper.getUserData();
    let id = ctx.params.id;
    let team = await dataService.getSingleTeam(id);
    let hasOwner = userHelper.hasOwner(team._ownerId);
    let teamMember = await dataService.getListMember(team._id);
    let pending = teamMember.filter(x => x.status == "pending");
    let members = teamMember.filter(x => x.status == "member");
    let memberCount = members.length;
    let isPending = pending.find(x =>x.user._id == userData._id);
    let isMember = members.find(x =>x.user._id == userData._id);

    renderer(detailsTemp(!!userData, team, hasOwner, pending, members, memberCount, isPending, isMember));
}

async function onJoinTeam(e) {
    let teamId = e.target.dataset.teamId;
    await dataService.requestToJoin(teamId);
    goTo(`/details/${teamId}`)
}

async function onApproveUser(e) {
    e.prevendtDefault();
    let userId = e.target.dataset.userId;
    let teamId = e.target.dataset.teamId;
    let teamMember = await dataService.getListMember(teamId);
    let currentUser = teamMember.find(x=>x.user._id == userId);

 let data = {
    teamId,
    status: "member"
}

    await dataService.approveRequest(currentUser._id, data);
}