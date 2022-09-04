import React from "react"
import "./ProposalCard.css"


function proposalCard({headingForProposal,description,upvote,downvote}) {
    return (
        <div className="proposalContainer">
            <div className="mainHalf">
                <div className="proposalName">{headingForProposal}</div>
                <div className="voteDisplay">
                    <div className="upvote">upvote {upvote}</div>
                    <div className="downvote"> downvote {downvote}</div>
                </div>
            </div>
            <div className="textHalf">{description}</div>
        </div>
    )
}

export default proposalCard
