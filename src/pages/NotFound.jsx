import PageLayout from "../layouts/PageLayout";

export default function NotFound() {
    return (
        <PageLayout backLink={true}>
            <section>
                <h2>Coś poszło nie tak</h2>
            </section>
        </PageLayout>
    );
}