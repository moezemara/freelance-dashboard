import AppliedProposalCard from "./AppliedProposalCard";

const AppliedProposals = (props) => {
  return (
    <div className="appliedproposals">
      <h1>Applied Proposal</h1>

      <AppliedProposalCard
        proposalName="proposal 1"
        FreelancerName="Ashmawy"
        FreelancerRate="4.9"
        coverLetter="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, nam fuga recusandae quis magni vero sed distinctio dolores dolor alias accusamus dolorem aliquid pariatur cum animi facilis nostrum corrupti. Unde nihil ipsa sapiente aspernatur molestiae corrupti corporis dolor quo ut accusamus recusandae at laudantium quaerat, consequatur vel. Sapiente et esse sit non impedit cumque accusantium temporibus eius dolorum, delectus placeat hic labore at ratione, quasi iste architecto consectetur explicabo ducimus, nulla quod quisquam ut cupiditate? Ducimus asperiores facere fuga, quia vel sed numquam, unde quod voluptates nemo non? Animi soluta saepe architecto totam facilis eveniet minus qui id amet molestiae facere itaque deserunt porro, non voluptates eligendi. Hic repellat, autem iste amet quae laboriosam asperiores eveniet soluta doloremque quidem dolor tempore maiores qui delectus earum cumque quas suscipit ad vero! Ipsum repellendus minima, sed odit odio itaque deserunt neque eaque dolorum ipsam necessitatibus inventore molestias sit adipisci blanditiis nam ratione consequatur? Non at accusantium tempora, beatae iure quam pariatur ea fugiat numquam cupiditate asperiores quis cumque rem. Deleniti quasi delectus asperiores, quidem impedit alias autem voluptas sequi, dignissimos reprehenderit, incidunt architecto laborum possimus sit tempora nobis corrupti laboriosam repellat eum tempore quas natus at sint fugiat. Quod quasi temporibus nam?"
        dueDate="5-5-2005"
        recommendedPrice="100"
      />
    </div>
  );
};

export default AppliedProposals;
