import {Arg, Mutation, Resolver, Int, Query} from "type-graphql";
import {Movie} from "../entity/Movie";

// @ObjectType()
@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg('title', () => String, {nullable: true}) title: string | null,
    @Arg('minutes', () => Int) minutes: number
  ) {
    console.log("args", title, minutes);
    // @ts-ignore
    await Movie.insert({title, minutes});
    return true;
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find();
  }
}
