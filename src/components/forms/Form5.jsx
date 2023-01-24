import React, { useContext } from "react";
import StepContext from "../../context/StepProvider";

export default function Form5() {
  const { step } = useContext(StepContext);

  return (
    <div className={step === 5 ? "form formFive active" : "form formFive"}>
      <div className="labels">
        <h1>Congratultions!!</h1>
        <h5>
          You have completed onboarding, you can complete the form by accepting
          the following T&Cs
        </h5>
        <div className="form-input">
          <div>
            <h3>End-User agreement</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              tenetur ipsam quas iusto aperiam? Voluptate molestias accusamus
              quo, dicta consequuntur, reiciendis, possimus tenetur ratione
              veritatis alias pariatur vel voluptates fuga quisquam quibusdam
              at. Molestias laborum sequi atque voluptatibus consequatur? Nihil
              voluptate atque quam quae. Illum ad amet, corrupti quisquam vero
              nesciunt perferendis neque quas modi itaque, corporis rem aliquam
              illo. Sapiente repellat error tempore eligendi, odio dicta ratione
              libero voluptas sint temporibus saepe id debitis vero qui? Natus
              doloremque reiciendis quam enim dolorem quae ab aperiam nam nemo,
              eaque asperiores, voluptatibus magnam maxime quo ratione quis quia
              dolores sed. Nam modi excepturi pariatur. Soluta nihil rerum
              nulla? Voluptas eius enim cumque ab tempora laboriosam accusantium
              quae, eaque ea officia nesciunt? Voluptatibus, maxime ratione? Rem
              in, eos doloremque fugiat saepe quam quasi aspernatur praesentium
              nemo fuga harum atque perferendis officia ex? Sed dolorem, qui
              eveniet vitae molestiae reiciendis temporibus harum voluptate quae
              in laudantium voluptatem ducimus ad sunt perspiciatis quia ab
              suscipit delectus odio praesentium. Dolor repellendus dolores
              necessitatibus architecto, quis odit vitae, delectus eveniet
              repudiandae expedita ducimus voluptas exercitationem dolorum
              molestiae dolore blanditiis mollitia quas tenetur reprehenderit
              temporibus. Architecto voluptatem voluptatibus illum eius sequi
              facilis soluta. Explicabo minus atque maxime placeat doloremque.
              Iure facere a dolor esse odit repudiandae dolore ipsam, odio
              dignissimos rem debitis doloribus illum consectetur? Officia
              distinctio a corporis cum reiciendis fugit suscipit mollitia
              nostrum impedit deleniti, iusto aliquid quod harum dicta assumenda
              dolorem magnam placeat est. Quis, vel? Natus earum, quibusdam ab
              beatae incidunt rerum veritatis exercitationem dolor unde,
              laboriosam ipsam. Recusandae excepturi saepe harum unde vitae
              illum optio consequatur in necessitatibus aliquam nam molestias at
              eveniet debitis, praesentium neque quod non dolore obcaecati
              quaerat odit? Harum, culpa quia, laudantium dolores aliquid
              placeat error sapiente neque totam dolorem ratione explicabo ipsum
              vitae, tempore mollitia repellendus. Necessitatibus ducimus, unde
              alias, odio possimus incidunt quod architecto aspernatur earum
              totam, debitis enim animi distinctio modi. Blanditiis debitis
              rerum quasi libero ad labore odio mollitia tenetur? Repudiandae
              eos tenetur ducimus nulla consequuntur animi officia non ipsa
              minus culpa illum, recusandae iste molestiae aperiam deleniti
              officiis corporis dolorem voluptate optio velit quibusdam
              perferendis ullam ipsam. Ab at ea recusandae sapiente nihil,
              voluptates obcaecati nostrum fugit accusantium vero officia! Quod,
              recusandae possimus iusto labore officia minima perferendis
              inventore dolores aliquam vel excepturi doloremque, repellat
              ducimus. Perferendis quidem nihil enim dolore quae, soluta porro
              ab laudantium nesciunt suscipit neque a molestiae tempore, quas
              ipsa itaque voluptate repellat eaque, iste nobis illum sit. Natus
              inventore nam illo dolores ad magnam veniam rem est placeat
              recusandae vero facere nobis, cumque eligendi eius neque ea soluta
              porro sunt, eos sapiente atque fuga mollitia reprehenderit? Vero
              sint error accusamus ullam nihil similique esse officiis cum!
              Assumenda corrupti minus molestiae autem in aperiam et, harum quod
              velit, repellendus ducimus ad corporis placeat laudantium nihil
              eveniet quibusdam nulla amet neque soluta excepturi facilis iure
              quas at. Cupiditate natus consequatur ad ullam itaque? Dolorum
              dolor blanditiis officia at ullam sint tempora porro amet tenetur
              quia eaque eligendi iure, culpa minima.
            </p>
            <div className="">
              <div className="flex gap">
                <input type="checkbox" name="checkbox" id="" />
                <span>I accept everything</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
