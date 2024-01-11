import { Category } from '../../category/entities/category.entity';
import { User } from '../../user/entities/user.entity';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsString()
  @MinLength(6)
  type: 'expense' | 'income';

  @IsNotEmpty()
  category: Category;

  @IsNotEmpty()
  user: User;
}
