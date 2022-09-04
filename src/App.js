// import logo from "./logo.svg"
import ProposalCard from "./components/ProposalCard"
import Nav from "./components/Nav"
import Dashboard from "./components/Dashboard"
import "./App.css"

function App() {
    return (
        <div className="landingContainer">
            <div className="nav">
                <Nav />
            </div>
            <div className="dashboard"><Dashboard proposalNumber={ 4} expiresIn={"3 days"} /></div>
            <div className="heading">All Proposals</div>
            <div className="proposalCard">
                <ProposalCard
                    headingForProposal={"Infrastructure Costs of Subscan "}
                    description={
                        "This proposal is used to pay the infrastructure costs of Moonbeam ..."
                    }
                    upvote={12}
                    downvote={7}
                />

                <ProposalCard
                    headingForProposal={"Infrastructure Costs of Subscan "}
                    description={
                        "This proposal is used to pay the infrastructure costs of Moonbeam ..."
                    }
                    upvote={12}
                    downvote={7}
                />

                <ProposalCard
                    headingForProposal={"Infrastructure Costs of Subscan "}
                    description={
                        "This proposal is used to pay the infrastructure costs of Moonbeam ..."
                    }
                    upvote={12}
                    downvote={7}
                />

                <ProposalCard
                    headingForProposal={"Infrastructure Costs of Subscan "}
                    description={
                        "This proposal is used to pay the infrastructure costs of Moonbeam ..."
                    }
                    upvote={12}
                    downvote={7}
                />
            </div>
        </div>
    )
}

export default App
